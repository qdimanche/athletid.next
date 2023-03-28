import Responsability from '@/src/components/About/OurResponsabilities/Responsability'
import {responsabilyContent} from '@/src/components/About/OurResponsabilities/ResponsabilityData'

export default function OurResponsabilities() {
    return (
        <div className={'mt-[92px] md:mt-[80px] md:grid md:grid-cols-3 md:gap-[72px] lg:p-8 lg:border lg:border-black/6 lg:rounded-medium'}>
            {responsabilyContent.map((value, index) => {
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