import React from 'react'
import Button from "@/src/components/UI/Button";
import Image from "next/image";
import CaptorPrototype from "@/public/assets/images/captor-prototype.webp";

const Footer = () => {
  return (
    <div className={'lg:mt-40 mt-28 h-screen bg-black text-white'}>
      <div className={'container mx-auto flex justify-between h-full'}>
        <div className={'w-1/2 flex flex-col justify-center h-full'}>
          <h2 >Rejoignez la liste d&apos;attente</h2>
          <span className={'!my-8'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos minima, sequi. Dolor fuga libero provident quas
            reiciendis ut voluptate. Accusamus accusantium, aliquam animi
            architecto commodi consequatur delectus deserunt doloremque et
            facere harum iure laudantium libero minus, modi molestiae mollitia
            nemo neque nobis odit perspiciatis reiciendis rem sit totam
            voluptatem voluptates.
          </span>
          <Button variant={'red'} link={'/'} text={"Rejoignez la liste d'attente"} className={''}/>
        </div>
        <Image src={CaptorPrototype} width={500} height={740} alt={""}/>
      </div>
    </div>
  )
}

export default Footer
