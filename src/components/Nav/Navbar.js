import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Button from '../UI/Button'
import HamburgerMenu from './Burger'
import Image from 'next/image'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

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
            className={`fixed top-0 z-[999] md:px-12 px-8  w-screen transition duration-1000 py-5 ${
                scrollDown ? 'opacity-animation' : ''
            }`}
        >
            <div className={'max-w-[1280px] mx-auto flex justify-between'}>
                <div>
                    <Link href="/" className={`flex space-x-2 items-center z-[999]`}>
                        <Image
                            src={'/assets/images/black-logo-athletid.svg'}
                            width={110}
                            height={40}
                            id={'test'}
                            alt=""
                        />
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
                            content={'Obtenir Apco'}
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
