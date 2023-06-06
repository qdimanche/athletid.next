import React from 'react'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import { BsSortUp, BsSortUpAlt } from 'react-icons/bs'
import {useTranslation} from "next-i18next";

const SortFilter = ({ ascendingOrder, onSortToggle }) => {

    const { t } = useTranslation('blog')

    return (
      <div>
        <ToggleButton
          onClick={onSortToggle}
          content={
            ascendingOrder === false ? (
              <div className={'flex space-x-3'}>
                <BsSortUp color={'black'} />
                <div>{t('blog:filters.sort.dateDescending')}</div>
              </div>
            ) : (
              <div className={'flex space-x-3'}>
                <BsSortUpAlt color={'black'} />
                <div>{t('blog:filters.sort.dateAscending')}</div>
              </div>
            )
          }
          className={'px-[16px] py-[5px] border-black mb-6'}
        />
      </div>
    )
}

export default SortFilter
