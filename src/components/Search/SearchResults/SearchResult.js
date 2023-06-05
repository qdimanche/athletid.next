import React, { useEffect, useState } from 'react';
import { Post } from '@/src/components/Blog/ArchivePosts/Post';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const SearchResult = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

  useEffect(() => {
    fetcher(`api/posts`)
        .then(({ data }) => {
          setPosts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
  }, []);

  const search = useSearchParams();
  const searchQuery = search ? search.get('q') : null;

  const encodedSearchQuery = encodeURI(searchQuery || '');
  const { data } = useSWR(
      `${baseURL}api/posts/search?q=${encodedSearchQuery}`,
      fetcher,
      { initialData: posts } // Utilisez l'état initial `posts` pour afficher les données pendant le chargement
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data?.posts) {
    return null;
  }

  console.log(data);

  return (
      <div className={'mt-[72px] md:mt-[120px]'}>
        <div
            className={
              'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'
            }
        >
          {data.posts.map((value, index) => {
            return <Post data={value} key={index} />;
          })}
        </div>
      </div>
  );
};

export default SearchResult;
