import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Button from '../UI/Button'
import { useIntl } from 'react-intl'

const HeaderHome = (props) => {
  const intl = useIntl()

  return (
    <header
      className={
        'lg:h-[95vh] md:h-[80vh] h-[60vh] relative overflow-hidden flex justify-center md:justify-start safari-overflow-fix'
      }
    >
      <div
        className={'absolute top-0 left-0 w-full h-full bg-black/20 z-[1] '}
      ></div>
      <Image
        src={props.img}
        alt="Femme s'entraînant gràce à l'application Timer"
        className={`w-full h-full object-cover pointer-events-none`}
      />
      <div
        style={{ whiteSpace: 'pre-line' }}
        className={
          'lg:mt-0 md:mt-3 absolute-vertical-center-header absolute-vertical-center-mobile-header flex flex-col justify-center md:items-start items-center  z-[3] md:p-0 px-8 md:grid lg:grid-cols-[3fr_2fr]'
        }
      >
        <div className={`2xl:ml-28 lg:ml-20 md:ml-12`}>
          <h1
            className={`md:text-left text-center !text-${props.color}  white whitespace-pre-wrap`}
          >
            Créer une routine d’entraînement durable.
          </h1>
          <p
            className={`mt-[10px] mb-[20px] !text-${props.color} md:text-left text-center md:w-3/4`}
          >
            Atteins tes objectifs et découvre les bienfaits du sport avec
            l’univers Athletid. Des applications mobiles et objets connectés qui
            s’adaptent à vos besoins. La régularité est la clé, construisons-la
            ensemble.
          </p>
          <div
            className={`flex md:justify-start justify-center space-x-4 ${props.visibilityWhiteButton}`}
          >
            <Button
              variant={'fullblack'}
              link={props.link}
              text={"Rejoindre la liste d'attente"}
            />
            <Button variant={'grey'} link={props.link} text={'Découvrir'} />
          </div>
        </div>
      </div>
      <div
        className={
          'absolute bottom-[2.5rem] right-[2.5rem] space-y-6 z-[900] text-[1.3em] md:flex flex-col hidden'
        }
      >
        <a
          target={'_blank'}
          href="https://www.instagram.com/athletid/"
          rel="noreferrer"
        >
          <FaInstagram color={props.color} size={18} />
        </a>
        <a
          target={'_blank'}
          href="https://www.linkedin.com/company/athletid/"
          rel="noreferrer"
        >
          <FaFacebook color={props.color} size={18} />
        </a>
        <a
          target={'_blank'}
          href="https://www.facebook.com/TimerByAthletid"
          rel="noreferrer"
        >
          <FaLinkedin color={props.color} size={18} />
        </a>
      </div>
    </header>
  )
}


export default HeaderHome;