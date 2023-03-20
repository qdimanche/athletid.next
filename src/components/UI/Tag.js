import clsx from "clsx";

import React from 'react';
import PropTypes from "prop-types";

const Tag = ({ className, ...props }) => {
  const { variant } = props
  return (
    <div
      className={clsx(
        `duration-300 px-3 md:px-6 transition py-1 rounded-medium border-[1px] w-fit text-[12px]`,
        variant === 'black' && 'bg-transparent !border-black',
        variant === 'white' && 'bg-transparent  border-white text-white'
      , className)}
    >
      {props.text}
    </div>
  )
}

Tag.propTypes = {
    children: PropTypes.node, onClick: PropTypes.func, variant: PropTypes.oneOf(['white', 'black'])
};

export default Tag;