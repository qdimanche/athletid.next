import clsx from "clsx";

import React from 'react';
import PropTypes from "prop-types";
import Button from "@/src/components/UI/Button";

const Tag = ({ className, ...props }) => {
  const { variant } = props
  return (
    <div
      className={clsx(
        `duration-300 px-3 md:px-6 transition py-1 rounded-medium border-[1px] w-fit`,
        variant === 'black' && 'bg-transparent  border-black ',
        variant === 'white' && 'bg-transparent  border-white text-white'
      , className)}
    >
      {props.text}
    </div>
  )
}

Tag.propTypes = {
    children: PropTypes.node, onClick: PropTypes.func, variant: PropTypes.oneOf(['white', 'default', 'black', 'red', 'fullblack', 'grey'])
};

export default Tag;