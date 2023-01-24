import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Button from "../UI/Button";
import HamburgerMenu from "./Burger"
import Logo from "../../../public/assets/images/logo-athletid.svg";
import TextLogo from "../../../public/assets/images/text-logo.svg";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

const Navbar = (props) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    useEffect(() => {
        click ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    }, [click])


    return (<div
        className={'flex fixed justify-between z-[999] w-screen lg:!py-[30px] px-12 py-4  top-0 '}>
        <div>
            <Link href="/" className={`flex space-x-2 items-center z-[999]`}>
                <Logo width={32} id={'test'} alt=""/>
                <TextLogo
                    className={'hidden lg:block translate-y-0'}
                    alt=""/>
            </Link>
        </div>

        <div className={`flex items-center ${props.animation}`}>
            <ul className={`justify-end items-center px-10 w-full  lg:flex hidden space-x-8 ${props.animation}`}>
                {/*                    <li className={scrollPosition < 100 && props.playAnimation === true ? `translate-y-0` : 'translate-y-[-300%] duration-1000'}>
                        <Link href="/a-propos">À propos de nous</Link>
                    </li>*/}
                <li>
                    <Link href="/pages/contact">Support</Link>
                </li>
                <li className={''}>
                    <Button variant={"red"} text={'Network'} link={"/network"}/>
                </li>
            </ul>

            <div
                className={click ? 'fixed bg-white duration-[1300ms] w-screen h-screen heightfix-ios top-0 left-0 bottom-0 overflow-hidden z-[400]' : 'bg-white invisible opacity-0 duration-[300ms] absolute w-screen h-screen top-0 left-0 bottom-0 overflow-visible'}>
                <div
                    className={click ? 'lg:fixed-center-element absolute-vertical-center flex lg:space-x-40' : 'hidden'}>
                    <ul className={'text-left apparition-from-bottom-hamburger-menu lg:block hidden '}>
                        <li className={'text-[14px] font-bold'}>
                            <span>Contact</span>
                        </li>
                        <li className={'text-[20px] opacity-60 mb-8'}>
                            <a href={'mailto:contact@athletid.com'}>contact@athletid.com</a>
                        </li>
                        <li className={'text-[14px] font-bold'}>
                            <span>Nos réseaux</span>
                        </li>
                        <li className={'text-[20px] opacity-60'}>
                            <a target="_blank" href={'https://www.instagram.com/athletid/'}
                               rel="noreferrer">Instagram</a>
                        </li>
                        <li className={' text-[20px] opacity-60'}>
                            <a target="_blank" href={'https://www.linkedin.com/company/athletid/'}
                               rel="noreferrer">Linkedin</a>
                        </li>
                        <li className={' text-[20px] opacity-60'}>
                            <a target="_blank" href={'https://www.facebook.com/TimerByAthletid'}
                               rel="noreferrer">Facebook</a>
                        </li>
                    </ul>


                    <ul className={'text-left apparition-from-bottom-hamburger-menu space-y-10'}>
                        <li className={'text-[20px] lg:text-[14px]  font-bold lg:!-mb-4'}>
                            Menu
                        </li>
                        <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                            <Link href="/">Accueil</Link>
                        </li>
                        <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                            <Link href="/pages/network">Network</Link>
                        </li>
                        {/*                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <Link to="/timer">Timer</Link>
                            </li>*/}
                        {/*                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <Link to="/a-propos">À propos</Link>
                            </li>*/}
                        <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                            <Link href="/pages/contact">Contact</Link>
                        </li>
                        <li className={'lg:hidden flex justify-center space-x-8 z-300 !text-[1.3em] pt-4'}>
                            <a target={'_blank'} href="https://www.instagram.com/athletid/"
                               rel="noreferrer"><FaInstagram color={'black'} size={18}/></a>
                            <a target={'_blank'} href="https://www.linkedin.com/company/athletid/"
                               rel="noreferrer"><FaFacebook
                                color={'black'}
                                size={18}/></a>
                            <a target={'_blank'} href="https://www.facebook.com/TimerByAthletid"
                               rel="noreferrer"><FaLinkedin color={'black'}
                                                            size={18}/></a>
                        </li>
                    </ul>

                </div>

            </div>


            <div className={'z-[900] w-[2rem]'} onClick={handleClick}>
                {click ? (<HamburgerMenu/>) : (<HamburgerMenu/>)}
            </div>


        </div>


    </div>);
};

export default Navbar;
