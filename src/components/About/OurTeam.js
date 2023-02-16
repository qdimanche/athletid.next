import React from 'react'
import Image from 'next/image'
import Exemple from '../../../public/assets/images/utilisateur-athletid.webp'

const OurTeam = () => {
  return (
    <div className={'lg:my-40 my-32'}>
      <h2 className={'mb-12 !whitespace-normal !font-semibold text-center'}>
        Notre équipe
      </h2>
      <div
        className={'grid lg:grid-cols-4 grid-cols-2 lg:gap-16 gap-12 mx-auto'}
      >
        <div className={'space-y-4'}>
          <div className={'aspect-square rounded-[10px] overflow-hidden'}>
            <Image src={Exemple} alt={''} className={''} />
          </div>
          <div className={'space-y-2'}>
            <h4>Julien Nivaud</h4>
            <p className={'!leading-6'}>Co-Founder & CEO</p>
          </div>
        </div>
        <div className={'space-y-4'}>
          <div className={'aspect-square rounded-[10px] overflow-hidden'}>
            <Image src={Exemple} alt={''} className={''} />
          </div>
          <div className={'space-y-2'}>
            <h4>Jimmy Mabillon</h4>
            <p className={'!leading-6'}>Co-Founder & CEO</p>
          </div>
        </div>
        <div className={'space-y-4'}>
          <div className={'aspect-square rounded-[10px] overflow-hidden'}>
            <Image src={Exemple} alt={''} className={''} />
          </div>
          <div className={'space-y-2'}>
            <h4>Quentin Dimanche</h4>
            <p className={'!leading-6'}>Développeur Web</p>
          </div>
        </div>
        <div className={'space-y-4'}>
          <div className={'aspect-square rounded-[10px] overflow-hidden'}>
            <Image src={Exemple} alt={''} className={''} />
          </div>
          <div className={'space-y-2'}>
            <h4>Noé Chagué</h4>
            <p className={'!leading-6'}>UX/UI et Designer Graphique</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
