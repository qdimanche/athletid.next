import {BsShieldCheck} from 'react-icons/bs'
import {BiDonateHeart, BiRecycle} from 'react-icons/bi'
import {Carousel} from 'react-responsive-carousel'
import Responsability from '@/src/components/About/OurResponsabilities/Responsability'

export default function OurResponsabilities() {
    return (
        <div className={'lg:my-40 my-28'}>
            <div
                className={
                    'flex flex-col lg:w-3/4 items-center mx-auto text-center lg:mb-12 mb-8'
                }
            >
                <h2 style={{whiteSpace: 'pre-line'}}>
                    Athletid,
                    <br/>
                    une marque engagée.
                </h2>
            </div>
            <div
                className={
                    'md:grid md:grid-cols-3 lg:gap-16 md:gap-10 gap-6 md:mb-0 mb-10'
                }
            >
                <Responsability
                    icon={<BsShieldCheck color={'black'} size={40}/>}
                    title={'Protection \ndes données.'}
                    subtitle={
                        'Nous travaillons sur la mise en place d’un système utilisant la technologie blockchain pour donner à chacun la pleine possession de ses données personnelles.'
                    }
                />
                <Responsability
                    icon={<BiRecycle color={'black'} size={40}/>}
                    title={'Conception \nde nos produits.'}
                    subtitle={
                        'Dans une démarche de protection de notre planète nous travaillons actuellement pour que notre système de tracking soit composé au maximum de matériaux recyclés.'
                    }
                />
                <Responsability
                    icon={<BiDonateHeart color={'black'} size={40}/>}
                    title={'Agir \npour tous.'}
                    subtitle={
                        'Nous nous engageons à reverser entre 1% et 3% de nos bénéfices chaque année à une association œuvrant pour une cause en lien avec le domaine du sport.'
                    }
                />
            </div>
            <Carousel
                childrenSlide1={
                    <Responsability
                        icon={<BsShieldCheck color={'black'} size={40}/>}
                        title={'Protection des données.'}
                        subtitle={
                            'Nous travaillons sur la mise en place d’un système utilisant la technologie blockchain pour donner à chacun la pleine possession de ses données personnelles.'
                        }
                    />
                }
                childrenSlide2={
                    <Responsability
                        icon={<BiRecycle color={'black'} size={40}/>}
                        title={'Conception de nos produits.'}
                        subtitle={
                            'Dans une démarche de protection de notre planète nous travaillons actuellement pour que notre système de tracking soit composé au maximum de matériaux recyclés.'
                        }
                    />
                }
                childrenSlide3={
                    <Responsability
                        icon={<BiDonateHeart color={'black'} size={40}/>}
                        title={'Agir pour tous.'}
                        subtitle={
                            'Nous nous engageons à reverser entre 1% et 3% de nos bénéfices chaque année à une association œuvrant pour une cause en lien avec le domaine du sport.'
                        }
                    />
                }
            />
        </div>
    )
}