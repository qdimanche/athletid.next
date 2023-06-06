import React from 'react'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import { BsSortUp, BsSortUpAlt } from 'react-icons/bs'

const SortFilter = ({ ascendingOrder, onSortToggle }) => {
  return (
    <div>
      <ToggleButton
        onClick={onSortToggle}
        content={
          ascendingOrder === false ? (
            <div className={'flex space-x-3'}>
              <BsSortUp color={'black'} />
              <div>From the latest</div>
            </div>
          ) : (
            <div className={'flex space-x-3'}>
              <BsSortUpAlt color={'black'} />
              <div>From the oldest</div>
            </div>
          )
        }
        className={'px-[16px] py-[5px] border-black mb-6'}
      />
    </div>
  )
}

export default SortFilter
