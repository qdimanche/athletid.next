import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Button from '../UI/Button'
import HamburgerMenu from './Burger'
import Logo from '../../../public/assets/images/logo-athletid.svg'
import TextLogo from '../../../public/assets/images/text-logo.svg'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useInView} from "react-intersection-observer";

const Navbar = (props) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    useEffect(() => {
        click
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'visible')
    }, [click])

    const [scrollDown, setScrollDown] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY
            if (position > 0) {
                setScrollDown(true)
            } else {
                setScrollDown(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className={`fixed z-[999]  px-8 py-5 top-0 left-1/2 transform -translate-x-1/2 w-screen ${
                scrollDown ? 'bg-[#F7F7F7] opacity-100 transition duration-300' : 'bg-transparent transition duration-300'
            }`}
        >
            <div className={'container mx-auto flex justify-between'}>
                <div>
                    <Link href="/" className={`flex space-x-2 items-center z-[999]`}>
                        <Logo width={32} id={'test'} alt=""/>
                        <TextLogo className={'hidden lg:block translate-y-0'} alt=""/>
                    </Link>
                </div>

                <div className={`flex items-center ${props.animation}`}>
                    <div
                        className={`justify-end items-center px-10 w-full  lg:flex hidden space-x-10`}
                    >
                        <Link href={'/'}>Accueil</Link>
                        <Link href={'/'}>App Timer</Link>
                        <Link href={'/'}>App Athletid</Link>
                        <Link href={'/'}>Contact</Link>
                        <Button
                            variant={'redOutline'}
                            text={'Obtenir Apco'}
                            link={'/timer'}
                        />
                    </div>

                    <div
                        className={
                            click
                                ? 'fixed bg-white duration-[1300ms] w-screen h-screen top-0 left-0 bottom-0 overflow-hidden z-[400]'
                                : 'bg-white invisible opacity-0 duration-[300ms] absolute w-screen h-screen top-0 left-0 bottom-0 overflow-visible'
                        }
                    >
                        <div
                            className={
                                click
                                    ? 'lg:fixed-center-element absolute-vertical-center flex lg:space-x-40'
                                    : 'hidden'
                            }
                        >
                            <ul
                                className={
                                    'text-left apparition-from-bottom-hamburger-menu lg:block hidden '
                                }
                            >
                                <li className={'text-[14px] font-bold'}>
                                    <span>Contact</span>
                                </li>
                                <li className={'text-[20px] opacity-60 mb-8'}>
                                    <a href={'mailto:contact@athletid.com'}>
                                        contact@athletid.com
                                    </a>
                                </li>
                                <li className={'text-[14px] font-bold'}>
                                    <span>Nos réseaux</span>
                                </li>
                                <li className={'text-[20px] opacity-60'}>
                                    <a
                                        target="_blank"
                                        href={'https://www.instagram.com/athletid/'}
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li className={' text-[20px] opacity-60'}>
                                    <a
                                        target="_blank"
                                        href={'https://www.linkedin.com/company/athletid/'}
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                                <li className={' text-[20px] opacity-60'}>
                                    <a
                                        target="_blank"
                                        href={'https://www.facebook.com/TimerByAthletid'}
                                        rel="noreferrer"
                                    >
                                        Facebook
                                    </a>
                                </li>
                            </ul>

                            <ul
                                className={
                                    'text-left apparition-from-bottom-hamburger-menu space-y-10'
                                }
                            >
                                <li
                                    className={'text-[20px] lg:text-[14px]  font-bold lg:!-mb-4'}
                                >
                                    Menu
                                </li>
                                <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                    <Link href="/">Accueil</Link>
                                </li>
                                <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                    <Link href="/timer">Timer</Link>
                                </li>
                                <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                    <Link href="/a-propos">À propos</Link>
                                </li>
                                <li className={'text-[2.5rem] lg:text-[38px] opacity-60'}>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li
                                    className={
                                        'lg:hidden flex justify-center space-x-8 z-300 !text-[1.3em] pt-4'
                                    }
                                >
                                    <a
                                        target={'_blank'}
                                        href="https://www.instagram.com/athletid/"
                                        rel="noreferrer"
                                    >
                                        <FaInstagram color={'black'} size={18}/>
                                    </a>
                                    <a
                                        target={'_blank'}
                                        href="https://www.linkedin.com/company/athletid/"
                                        rel="noreferrer"
                                    >
                                        <FaFacebook color={'black'} size={18}/>
                                    </a>
                                    <a
                                        target={'_blank'}
                                        href="https://www.facebook.com/TimerByAthletid"
                                        rel="noreferrer"
                                    >
                                        <FaLinkedin color={'black'} size={18}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={'z-[900] w-[2rem]'} onClick={handleClick}>
                        {click ? <HamburgerMenu/> : <HamburgerMenu/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
