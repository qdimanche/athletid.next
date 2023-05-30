import ApcoRockBackground from "@/public/assets/images/apco-rock-background.webp"
import CaptorCard from "@/public/assets/images/captor-card.webp"
import WomanRedLine from "@/public/assets/images/woman-red-line.webp"
import ConstructionEntrainementApco from "@/public/assets/images/construction-entrainement-apco.webp"
import ConstructionSeanceFull from "@/public/assets/images/construction-seance-full.webp"
import Statistiques from "@/public/assets/images/statistiques.webp"
import ApcoFeaturesFullScreenMobile from '@/public/assets/images/apco-features-fullscreen-mobile.webp';
import ApcoFeaturesFullScreen from '@/public/assets/images/apco-features-fullscreen.webp';

export const apcoCardContent = [
  {
    title: 'All you need.',
    subTitle: 'In one app.',
    flipContentTitle: '1 app for all your needs.\n',
    flipContent:
      'Discover new workouts, get inspired, share your progress and passion or follow your progress with accurate and complete statistics on your activity. \n' +
      'You can even access the services and programs of certified professionals from the marketplace.',
    imageSrc: ApcoRockBackground,
    buttons: 'toggleButton',
  },
  {
    title: 'Recognize the exercises.',
    flipContentTitle: 'Unique in the world.',
    flipContent:
      'We have developed the first on-board system that recognizes the movements you make during your workout. With it, you can concretely see your progress and your evolution and follow all your training sessions. ',
    imageSrc: CaptorCard,
    className: 'md:col-span-2 !text-black',
    paragraphWidth: 'md:grid md:grid-cols-2',
    flipImage : WomanRedLine,
    flipImageHeight: 326,
    flipImageWidth: 240 ,
    buttons: 'toggleButton',
  },
  {
    title: 'Automatic writing of the \n' + 'training log.',
    flipContentTitle: 'No more handwriting',
    flipContent:
      'You can throw away your old workout book. Thanks to our powerful intelligent system, we can automatically write down your workout live.',
    imageSrc: ConstructionEntrainementApco,
    className: 'md:col-span-2',
    paragraphWidth: 'md:grid md:grid-cols-2',
    flipImage : ConstructionSeanceFull,
    flipImageHeight: 386,
    flipImageWidth: 190 ,
    buttons: 'toggleButton',
  },
  {
    title: 'All your stats.',
    subTitle: 'Customizable.',
    flipContentTitle: 'Your goals, your stats.',
    flipContent:
      'Customize your logbook to view statistics tailored to your goals.   You can share your progress with your friends and see where they are in their goals to encourage and support them.  ',
    imageSrc: Statistiques,
    buttons: 'toggleButton',
  },
]

export const homeCardContent = [
  {
    title: 'Intelligent motion\n' + 'recognition.',
    imageSrcMobile: ApcoFeaturesFullScreenMobile,
    imageSrc: ApcoFeaturesFullScreen,
    tag: true,
    textButton: true,
    link: '/athletid',
    paragraphWidth: 'w-3/4 md:w-1/3',
    className: 'md:col-span-2',
    buttonClassName: 'md:left-4',
  },
  {
    title: 'The power of data.',
    subTitle: 'Mesure your progress.',
    subTitleClassName: '!text-black opacity-[16%]',
    imageSrc: CaptorCard,
    textButton: true,
    link: '/athletid',
    className: '!text-black',
    paragraphWidth: 'w-2/3',
    buttonClassName: 'md:left-4',
  },
  {
    title: 'Motivation & inspiration.',
    subTitle: 'An environment for your \nsuccess.',
    imageSrc: ApcoRockBackground,
    buttonClassName: 'hidden',
    link: '',
  },
]
