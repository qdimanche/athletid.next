import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const onSearch = (event) => {
    event.preventDefault()

    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/search?q=${encodedSearchQuery}`);
  }

  return (
    <form className={'flex justify-center w-2/3'} onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className={'focus:ring-1 focus:ring-white'}
        type="text"
        required
        placeholder={'Search something...'}
      />
    </form>
  )
}

export default SearchBar
