import Head from 'next/head'
import MasonryGrid from '../src/components/UI/Grid/MasonryGrid'
import Format from '../src/layout/format'
import Header from '@/src/components/Header/Header'
import ImgHeader from '@/public/assets/images/femme-casque-audio.webp'
import { useIsMobile } from '@/src/components/Hooks/useMediaQuery'
import MasonryImages from '@/public/assets/images/masonry'
import ContactSupport from '@/src/components/Contact/ContactSupport'
import GridSection from '@/src/components/UI/Grid/GridSection'
import React from 'react'
import CardImageBottomRight from '@/src/components/UI/Card/CardImageBottomRight'
import CardImageTopRight from '@/src/components/UI/Card/CardImageTopRight'
import CardImageBottomFull from '@/src/components/UI/Card/CardImageBottomFull'
import BasicCard from '@/src/components/UI/Card/BasicCard/BasicCard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import imagePaths from '@/imagePaths'

export default function Home() {
  const isMobile = useIsMobile();
  const { t } = useTranslation('home');
  const homeCardContent = t('homeCardContent', { returnObjects: true });

  const language = 'en';

  const getImagePath = (imageKey) => {
    return imagePaths[language][imageKey];
  };

  return (
      <>
        <Head>
          <title>Athletid</title>
          <meta
              name="description"
              content="Bodybuilding, Crossfit, Yoga, Powerlifitng, Fitness ... Whatever your discipline, our innovative solutions will guide you towards your goals!"
          />
          <meta property="og:title" content="Athletid" />
          <meta property="og:type" content="website" />
        </Head>

        <Format>
          <Header
              title={t('header.title')}
              subTitle={t('header.subTitle')}
              imageSrc={ImgHeader}
              imageWidth={' w-[500px] md:w-1/2 '}
              link={'/timer'}
              imageClassName={'object-cover object-top md:!object-left-top'}
          />
          <div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
            <GridSection
                gridClassName={'md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr]'}
                title={t('gridSection1.title')}
                subTitle={t('gridSection1.subTitle')}
            >
              <CardImageBottomRight
                  title={t('cardImageBottomRight.title')}
                  subTitle={t('cardImageBottomRight.subTitle')}
              />
              <CardImageTopRight
                  title={t('cardImageTopRight.title')}
                  subTitle={t('cardImageTopRight.subTitle')}
              />
              <CardImageBottomFull
                  title={t('cardImageBottomFull.title')}
                  subTitle={t('cardImageBottomFull.subTitle')}
              />
            </GridSection>

            <GridSection
                gridClassName={'md:grid-cols-2 md:grid-rows-2'}
                title={t('gridSection2.title')}
                subTitle={t('gridSection2.subTitle')}
            >
              {homeCardContent.map((value, index) => {
                const imagePath = getImagePath(value.imageKey);
                const imagePathMobile = getImagePath(value.imageKeyMobile);

                return (
                    <BasicCard
                        key={index}
                        link={value.link}
                        tag={value.tag}
                        title={value.title}
                        subTitle={value.subTitle}
                        imageKey={
                          isMobile && imagePathMobile ? imagePathMobile : imagePath
                        }
                        paragraphWidth={value.paragraphWidth}
                        className={value.className}
                        subTitleClassName={value.subTitleClassName}
                        buttonClassName={value.buttonClassName}
                    />
                );
              })}
            </GridSection>
          </div>
          <MasonryGrid
              titleMasonry={t('masonryGrid.title')}
              subTitleMasonry={t('masonryGrid.title')}
              items={MasonryImages}
          />
          <div className={'px-4  max-w-[350px] md:max-w-[1170px] mx-auto '}>
            <ContactSupport
                title={t('contactSupport.title')}
                subTitle={t('contactSupport.subTitle')}
            />
          </div>
        </Format>
      </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home',
        'footer',
        'navbar',
        'uiComponents',
      ])),
    },
  };
}
