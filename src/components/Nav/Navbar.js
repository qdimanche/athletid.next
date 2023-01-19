import React, {useEffect, useState} from 'react';
import Link from "next/link";
import RedButton from "../Buttons/RedButton";
import HamburgerMenu from "./Burger"
import Logo from "../../assets/images/logo-athletid.svg";
import TextLogo from "../../assets/images/text-logo.svg";
import {useScrollPosition} from "../hooks/useScrollPosition";
import Image from 'next/image';


const Navbar = (props) => {

    const scrollPosition = useScrollPosition();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        props.animation === false ? setAnimation(false) : setAnimation(true);
    }, [props.animation],)

    if (process.browser){
        click ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    }



    return (
        <div
            className={'flex fixed justify-between z-[999] w-screen lg:!py-[30px] !py-[2.5rem] px-12  top-0 duration-1000 '}>
            <div >
                <div className={`flex space-x-2 items-center ${props.animation} z-[999]`}>
                    <Image id={'test'} src={Logo} className={'lg:w-8 w-6'} alt=""/>
                    <Image src={TextLogo} style={{width: "70px"}}
                              className={scrollPosition < 100 && props.playAnimation === true ? ` hidden lg:block translate-y-0` : 'translate-y-[-300%] duration-1000 hidden lg:block'}
                              alt=""/>
                </div>
            </div>

            <div className={`flex items-center ${props.animation}`}>
                <ul className={`justify-end items-center px-10 w-full  lg:flex hidden space-x-8 ${props.animation}`}>
{/*                    <li className={scrollPosition < 100 && props.playAnimation === true ? `translate-y-0` : 'translate-y-[-300%] duration-1000'}>
                        <Link href="/a-propos">À propos de nous</Link>
                    </li>*/}
                    <li className={scrollPosition < 100 && props.playAnimation === true ? `translate-y-0 ` : 'translate-y-[-300%] duration-1000'}>
                        <Link href="/contact">Support</Link>
                    </li>
                    <li className={''}>
                        <RedButton text={'Network'} link={"/network"}/>
                    </li>
                </ul>




                <div className={'z-[900] w-[2rem]'} onClick={handleClick}>
                    {click ? (<HamburgerMenu/>) : (<HamburgerMenu/>)}
                </div>
            </div>


        </div>
    );
};

export default Navbar;
