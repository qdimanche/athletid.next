import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Post } from '@/src/components/Blog/ArchivePosts/Post';
import SortFilter from '@/src/components/Blog/Filter/SortFilter';
import fetcher from '@/lib/fetcher';

const SearchResult = () => {
  const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
  const search = useSearchParams();
  const searchQuery = search ? search.get('q') : null;
  const encodedSearchQuery = encodeURI(searchQuery || '');
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postsInfosToShow, setPostsInfosToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const postsResponse = await fetcher(`api/posts/search?q=${encodedSearchQuery}`);
        console.log(postsResponse);
        setPosts(postsResponse.data.posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [encodedSearchQuery]);

  useEffect(() => {
    setPostsInfosToShow(posts);
  }, [posts]);

  useEffect(() => {
    if (ascendingOrder === false) {
      setPostsInfosToShow((prevState) =>
          prevState ? [...prevState].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)) : []
      );
    } else {
      setPostsInfosToShow((prevState) =>
          prevState ? [...prevState].sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)) : []
      );
    }
  }, [ascendingOrder]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const postsResponse = await fetcher(`api/posts/search?q=${encodedSearchQuery}`);
          console.log(postsResponse);
          setPosts(postsResponse.data.posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
          setIsError(false);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, 300);

    return () => clearTimeout(timer);
  }, [encodedSearchQuery]);

  const handleSortToggle = () => {
    setAscendingOrder((prevState) => !prevState);
  };

  if (!posts) {
    return null;
  }

  return (
      <div className={'mt-[72px] md:mt-[120px]'}>
        <SortFilter onSortToggle={handleSortToggle} ascendingOrder={ascendingOrder} />
        <div className={'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'}>
          {Array.isArray(postsInfosToShow) &&
              postsInfosToShow.map((value, index) => {
                return <Post data={value} key={index} />;
              })}
        </div>
      </div>
  );
};

export default SearchResult;
