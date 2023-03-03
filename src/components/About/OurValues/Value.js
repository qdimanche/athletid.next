import React from 'react';

const Value = (props) => {
    return (
      <div className={'flex flex-col'}>
        <div className={'flex space-x-4 item-center'}>
          <p className={'text-5xl'}>{props.icon}</p>
          <div className={'flex flex-col'}>
            <h3 className={'mb-2'}>{props.name}</h3>
          </div>
        </div>
      </div>
    )
};

export default Value;