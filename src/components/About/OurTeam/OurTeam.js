import React from 'react'
import Image from 'next/image'
import Julien from '../../../../public/assets/images/julien-nivaud.webp'
import Jimmy from '../../../../public/assets/images/jimmy-mabillon.webp'
import Quentin from '../../../../public/assets/images/quentin-dimanche.webp'
import Noe from '../../../../public/assets/images/noe-chague.webp'
import Member from "@/src/components/About/OurTeam/Member";

const OurTeam = () => {
  return (
    <div className={'lg:my-40 my-28'}>
      <h2 className={'mb-12 !whitespace-normal !font-semibold text-center'}>
        Notre équipe
      </h2>
      <div
        className={'grid md:grid-cols-4 grid-cols-2 gap-12 mx-auto'}
      >
        <Member name={"Julien \nNivaud"} position={"Directeur"} image={Julien}/>
        <Member name={"Jimmy \nMabillon"} position={"Co-Founder \n& CEO"} image={Jimmy}/>
        <Member name={"Quentin \nDimanche"} position={"Développeur \nWeb"} image={Quentin}/>
        <Member name={"Noé \nChagué"} position={"Designer \nGraphique"} image={Noe}/>

      </div>
    </div>
  )
}

export default OurTeam
