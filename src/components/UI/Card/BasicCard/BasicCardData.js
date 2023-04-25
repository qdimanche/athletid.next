export const apcoCardContent = [
  {
    title: 'All you need.',
    subTitle: 'In one app.',
    flipContentTitle: '1 app for all your needs.\n',
    flipContent:
      'Discover new workouts, get inspired, share your progress and passion or follow your progress with accurate and complete statistics on your activity. \n' +
      'You can even access the services and programs of certified professionals from the marketplace.',
    imageSrc: '/assets/images/apco-rock-background.webp',
    buttons: 'toggleButton',
  },
  {
    title: 'Recognize the exercises.',
    flipContentTitle: 'Unique in the world.',
    flipContent:
      'We have developed the first on-board system that recognizes the movements you make during your workout. With it, you can concretely see your progress and your evolution and follow all your training sessions. ',
    imageSrc: '/assets/images/captor-card.webp',
    className: 'md:col-span-2 !text-black',
    paragraphWidth: 'md:grid md:grid-cols-2',
    flipImage : '/assets/images/woman-red-line.webp',
    flipImageHeight: 326,
    flipImageWidth: 240 ,
    buttons: 'toggleButton',
  },
  {
    title: 'Automatic writing of the \n' + 'training log.',
    flipContentTitle: 'No more handwriting',
    flipContent:
      'You can throw away your old workout book. Thanks to our powerful intelligent system, we can automatically write down your workout live.',
    imageSrc: '/assets/images/construction-entrainement-apco.webp',
    className: 'md:col-span-2',
    paragraphWidth: 'md:grid md:grid-cols-2',
    flipImage : '/assets/images/construction-seance-full.webp',
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
    imageSrc: '/assets/images/statistiques.webp',
    buttons: 'toggleButton',
  },
]

export const homeCardContent = [
  {
    title: 'Intelligent motion\n' + 'recognition.',
    imageSrcMobile: '/assets/images/apco-features-fullscreen-mobile.webp',
    imageSrc: '/assets/images/apco-features-fullscreen.webp',
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
    imageSrc: '/assets/images/captor-card.webp',
    textButton: true,
    link: '/athletid',
    className: '!text-black',
    paragraphWidth: 'w-2/3',
    buttonClassName: 'md:left-4',
  },
  {
    title: 'Motivation & inspiration.',
    subTitle: 'An environment for your \nsuccess.',
    imageSrc: '/assets/images/apco-rock-background.webp',
    buttonClassName: 'hidden',
    link: '',
  },
]
