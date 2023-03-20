import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Button = ({className, children, ...props}) => {
    const {variant} = props

    return (
        <Link
            href={props.link ? props.link : ''}
            onClick={(event) => {
                if (!props.link) {
                    event.preventDefault()
                } else if (props.onClick) {
                    props.onClick(event)
                }
            }}
            className={clsx(
                `duration-300 px-6 transition py-2 rounded-medium border-[1px] w-fit`,
                variant === 'black' && 'bg-transparent  border-black',
                variant === 'fullblack' && 'bg-black border-0 text-white',
                variant === 'grey' && 'bg-gray-300 border-0 text-black',
                variant === 'white' && 'bg-transparent border-white text-white ',
                variant === 'red' &&
                'bg-timeRed hover:bg-timeRedHover  circle-boxShadow z-[900] !border-0 !text-white',
                variant === 'redOutline' && 'border border-timeRed z-[900]',
                className
            )}
        >
            {props.content}
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
        "redOutline"
    ]),
}

export default Button
