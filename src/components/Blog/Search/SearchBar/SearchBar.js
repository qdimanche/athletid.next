import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const { t } = useTranslation('blog');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const search = useSearchParams();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const searchQuery = search ? search.get('q') : null;
    setSearchQuery(searchQuery);

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [search]);

  const [searchTimeout, setSearchTimeout] = useState(null);

  const onSearch = (event) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    const timeout = setTimeout(() => {
      const encodedSearchQuery = encodeURI(inputValue);
      router.push(`/search?q=${encodedSearchQuery}`);
    }, 300);

    setSearchTimeout(timeout);
  };

  return (
      <form className="flex" onSubmit={onSearch}>
        <div className="relative md:w-1/3 w-full">
          <input
              ref={searchInputRef}
              value={searchQuery ? searchQuery : ""}
              onChange={handleInputChange}
              className="focus:ring-1 focus:ring-white w-full"
              type="text"
              required
              placeholder={t('blog:searchForm.placeholder')}
          />
          <BsSearch
              size={16}
              color="black"
              onClick={onSearch}
              className="absolute transform -translate-y-1/2 top-1/2 right-[10px] cursor-pointer"
          />
        </div>
      </form>
  );
};

export default SearchBar;
