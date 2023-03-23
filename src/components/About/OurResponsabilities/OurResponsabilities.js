import Responsability from '@/src/components/About/OurResponsabilities/Responsability'
import {responsabilyContent} from '@/src/components/About/OurResponsabilities/ResponsabilityData'

export default function OurResponsabilities() {
    return (
        <div className={'lg:mt-40 mt-28'}>
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