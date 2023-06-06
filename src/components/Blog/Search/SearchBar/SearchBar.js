import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  const { t } = useTranslation('blog')

  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const onSearch = (event) => {
    event.preventDefault()

    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/search?q=${encodedSearchQuery}`)
  }

  return (
    <form className={'flex'} onSubmit={onSearch}>
      <div className={'relative md:w-1/3 w-full'}>
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className={'focus:ring-1 focus:ring-white w-full'}
          type="text"
          required
          placeholder={t('blog:searchForm.placeholder')}
        />
        <BsSearch
          size={16}
          color={'black'}
          onClick={onSearch}
          className={'absolute transform -translate-y-1/2 top-1/2 right-[10px] cursor-pointer'}
        />
      </div>
    </form>
  )
}

export default SearchBar
