import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import RedButton from "../Buttons/RedButton";
import HamburgerMenu from "./Burger"
import Logo from "../../../public/images/logo-athletid.svg";
import {ReactComponent as TextLogo} from "../../../public/images/text-logo.svg";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {useScrollPosition} from "../hooks/useScrollPosition";


const Navbar = (props) => {

    const scrollPosition = useScrollPosition();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        props.animation === false ? setAnimation(false) : setAnimation(true);
    },)


    click ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";


    return (
        <div
            className={'flex fixed justify-between z-[999] w-screen lg:!py-[30px] !py-[2.5rem] px-12  top-0 duration-1000 '}>
            <Link to="/">
                <div className={`flex space-x-2 items-center ${props.animation} z-[999]`}>
                    <img id={'test'} src={Logo} className={'lg:w-8 w-6'} alt=""/>
                    <TextLogo style={{width: "70px"}}
                              className={scrollPosition < 100 && props.playAnimation === true ? ` hidden lg:block translate-y-0` : 'translate-y-[-300%] duration-1000 hidden lg:block'}
                              alt=""/>
                </div>
            </Link>

            <div className={`flex items-center ${props.animation}`}>
                <ul className={`justify-end items-center px-10 w-full  lg:flex hidden space-x-8 ${props.animation}`}>
{/*                    <li className={scrollPosition < 100 && props.playAnimation === true ? `translate-y-0` : 'translate-y-[-300%] duration-1000'}>
                        <Link to="/a-propos">À propos de nous</Link>
                    </li>*/}
                    <li className={scrollPosition < 100 && props.playAnimation === true ? `translate-y-0 ` : 'translate-y-[-300%] duration-1000'}>
                        <Link to="/contact">Support</Link>
                    </li>
                    <li className={''}>
                        <RedButton text={'Network'} link={"/network"}/>
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
                                <a target="_blank" href={'https://www.instagram.com/athletid/'}>Instagram</a>
                            </li>
                            <li className={' text-[20px] opacity-60'}>
                                <a target="_blank" href={'https://www.linkedin.com/company/athletid/'}>Linkedin</a>
                            </li>
                            <li className={' text-[20px] opacity-60'}>
                                <a target="_blank" href={'https://www.facebook.com/TimerByAthletid'}>Facebook</a>
                            </li>
                        </ul>


                        <ul className={'text-left apparition-from-bottom-hamburger-menu space-y-10'}>
                            <li className={'text-[20px] lg:text-[14px]  font-bold lg:!-mb-4'}>
                                Menu
                            </li>
                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <Link to="/network">Network</Link>
                            </li>
                            {/*                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <Link to="/timer">Timer</Link>
                            </li>*/}
{/*                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <Link to="/a-propos">À propos</Link>
                            </li>*/}
                            <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li className={'lg:hidden flex justify-center space-x-8 z-300 !text-[1.3em] pt-4'}>
                                <a target={'_blank'} href="https://www.instagram.com/athletid/"><FaInstagram color={'black'} size={18}/></a>
                                <a target={'_blank'} href="https://www.linkedin.com/company/athletid/"><FaFacebook
                                    color={'black'}
                                    size={18}/></a>
                                <a target={'_blank'} href="https://www.facebook.com/TimerByAthletid"><FaLinkedin color={'black'}
                                                                                                                 size={18}/></a>
                            </li>
                        </ul>

                    </div>

                </div>


                <div className={'z-[900] w-[2rem]'} onClick={handleClick}>
                    {click ? (<HamburgerMenu/>) : (<HamburgerMenu/>)}
                </div>
            </div>


        </div>
    );
};

export default Navbar;
