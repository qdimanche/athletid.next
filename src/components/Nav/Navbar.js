import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Button from '../UI/Button/Button'
import HamburgerMenu from './Burger'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Image from 'next/image'
import {useIsLargeScreen} from '@/src/components/Hooks/useMediaQuery'
import Div100vh from "react-div-100vh";

const Navbar = (props) => {
    const [click, setClick] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const handleClick = () => setClick(!click)

    const isLargeScreen = useIsLargeScreen()

    useEffect(() => {
        click
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'visible')
    }, [click])

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`fixed z-[999] w-screen lg:py-6 py-4  top-0 ${
                isScrolled ? 'bg-white' : ''
            } duration-500`}
        >
            <div className={'flex max-w-[1170px] px-4 mx-auto justify-between'}>
                <div>
                    <Link href="/" className={``}>
                        <Image
                            src={'/assets/icons/logo-athletid.svg'}
                            width={isLargeScreen ? 110 : 120}
                            height={isLargeScreen ? 38 : 120}
                            alt=""
                            sizes={"10vw"}
                        />
                    </Link>
                </div>

                <div className={`justify-end items-center w-full flex`}>
                    <div className={'lg:block hidden space-x-[60px]'}>
                        <Link href="/">Home</Link>
                        <Link href="/timer">App Timer</Link>
                        <Link href="/apco">App Athletid</Link>
                        <Link href="/about">About</Link>
                        <Button
                            variant={'redOutline'}
                            content={'Contact'}
                            link={'/contact'}
                        />
                    </div>

                    <Div100vh
                        className={
                            click
                                ? 'fixed bg-white duration-[1300ms] w-screen top-0 left-0 bottom-0 overflow-hidden z-[400]'
                                : 'bg-white invisible opacity-0 duration-[300ms] absolute w-screen top-0 left-0 bottom-0 overflow-visible'
                        }
                    >
                        <div
                            className={
                                click
                                    ? 'lg:fixed-center-element absolute-vertical-center flex lg:space-x-40 w-full web'
                                    : 'hidden'
                            }
                        >
                            <ul
                                className={
                                    'text-left space-y-4 mx-auto'
                                }
                            >
                                <li
                                    className={'text-[20px] lg:text-[14px]  font-bold lg:!-mb-4'}
                                >
                                    Menu
                                </li>
                                <li className={'text-[38px] opacity-60'}>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className={'text-[38px] opacity-60'}>
                                    <Link href="/timer">App Timer</Link>
                                </li>
                                <li className={'text-[38px] opacity-60'}>
                                    <Link href="/apco">App Athletid</Link>
                                </li>
                                <li className={'text-[38px] opacity-60'}>
                                    <Link href="/about">About</Link>
                                </li>
                                <li className={'text-[38px] opacity-60'}>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li
                                    className={
                                        'lg:hidden flex  space-x-8 z-300 !text-[1.3em] pt-4'
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
                    </Div100vh>
                </div>
                <div className={'z-[900] w-[2rem] lg:hidden'} onClick={handleClick}>
                    {click ? <HamburgerMenu/> : <HamburgerMenu/>}
                </div>
            </div>
        </div>
    )
}

export default Navbar