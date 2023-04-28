import Responsability from '@/src/components/About/OurResponsabilities/Responsability'
import {useTranslation} from "next-i18next";

export default function OurResponsabilities() {

    const { t } = useTranslation('about')
    const responsabilityContent = t('about:responsabilyContent', { returnObjects: true })


    return (
        <div className={'mt-[92px] md:mt-[80px] md:grid md:grid-cols-3 md:gap-[72px] lg:p-8 lg:border lg:border-black/6 lg:rounded-medium'}>
            {responsabilityContent.map((value, index) => {
                return (
                    <Responsability
                        key={index}
                        icon={value.icon}
                        title={value.title}
                        subtitle={value.subTitle}
                    />
                )
            })}
        </div>
    )
}