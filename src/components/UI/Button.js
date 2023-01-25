import React from 'react';
import Link from "next/link";
import clsx from "clsx";
import PropTypes from "prop-types";

const Button = (props) => {
	
	const {variant} = props;
	
	return (<div>
			<Link href={props.link}>
				<div
					className={clsx(`duration-300 px-3 md:px-6 transition py-2 rounded-[30px] border-[1px] w-fit`,
						variant === "black" && "bg-transparent  border-black ",
						variant === "white" && "bg-transparent border-white text-white ",
						variant === "red" && "bg-timeRed hover:bg-timeRedHover  circle-boxShadow z-[900] !border-0 !text-white")}>
					{props.text}
				</div>
			</Link>
		</div>
	
	);
};


Button.propTypes = {
	children: PropTypes.node, onClick: PropTypes.func, variant: PropTypes.oneOf(['white', 'default', 'black', 'red'])
};

export default Button;
