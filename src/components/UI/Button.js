import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const Button = ({className, ...props}) => {
    const {variant} = props

    return (
        <Link
            href={props.link}
            className={clsx(
                `duration-300 px-6 transition py-3 rounded-medium border-[1px] w-fit`,
                variant === 'black' && 'bg-transparent  border-black ',
                variant === 'fullblack' && 'bg-black border-0 text-white',
                variant === 'grey' && 'bg-gray-300 border-0 text-black',
                variant === 'white' && 'bg-transparent border-white text-white ',
                variant === 'red' &&
                'bg-timeRed hover:bg-timeRedHover  circle-boxShadow z-[900] !border-0 !text-white',
                variant === 'redOutline' && 'border border-timeRed z-[900]',
                className
            )}
        >
            {props.text}
        </Link>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf([
        'white',
        'default',
        'black',
        'red',
        'fullblack',
        'grey',
    ]),
}

export default Button
