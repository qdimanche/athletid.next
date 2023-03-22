import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import Newsletter from '@/src/components/Footer/Newsletter'

const Footer = () => {
  return (
    <div className={'md:mt-40 mt-28'}>
      <Newsletter />

      <div
        className={
          'flex flex-col relative lg:mt-0 mt-0  max-w-[1280px] mx-auto  px-8 md:px-12'
        }
      >
        <div
          className={
            'lg:mt-12  pb-16 flex md:flex-row flex-col justify-between md:items-start items-center'
          }
        >
          <div className={'flex flex-col md:order-1 order-5 lg:mt-0 space-y-2'}>
            <div className={'flex space-x-4 !text-[1.2em]'}>
              <a
                target={'_blank'}
                href="https://www.instagram.com/timerbyathletid/"
                className={'lg:mb-0 mb-2 '}
                rel="noreferrer"
              >
                <FaInstagram size={18} color={'black'} />
              </a>
              <a
                target={'_blank'}
                href="https://www.facebook.com/TimerByAthletid "
                rel="noreferrer"
              >
                <FaFacebook size={18} color={'black'} />
              </a>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/company/athletid/"
                rel="noreferrer"
              >
                <FaLinkedin size={18} color={'black'} />
              </a>
            </div>
            <a
              className={'text-[1.2em] md:block hidden'}
              style={{ textDecoration: 'underline' }}
              href="mailto:contact@athletid.com"
            >
              contact@athletid.com
            </a>
            <p className={'text-black/30 !mr-[20px] md:mr-0'}>Lille, France</p>
          </div>

          <div
            className={
              'flex text-black/30 lg:space-x-[30px] order-1 md:mb-0 mb-4 flex-col '
            }
          >
            <div
              className={
                'w-full grid md:flex md:flex-col lg:flex-row md:items-start grid-cols-4 gap-y-3 md:gap-x-8 gap-x-4 space-x-0'
              }
            >
              <Link href={'/'}>Accueil</Link>
              <Link href={'/timer'} className={'justify-center flex'}>
                Timer
              </Link>
              <Link href={'/a-propos'}>À propos</Link>
              <Link href={'/contact'}>Contact</Link>
            </div>
          </div>

          <div
            className={
              'flex flex-col md:items-start lg:space-y-0 space-y-3 items-center order-2'
            }
          >
            <div
              className={
                'md:space-x-0 space-x-[30px] md:space-y-2 flex md:flex-col md:order-2 flex-row lg:!mb-3 !mb-10 '
              }
            >
              <Link
                className={'text-black/30'}
                href={'/politique-de-confidentialite'}
              >
                Politique de confidentialité
              </Link>
              <Link
                className={'text-black/30'}
                href={'/conditions-de-vente-et-d-utilisation'}
              >
                CGV/GU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
