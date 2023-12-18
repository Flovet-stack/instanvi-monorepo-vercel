import { userContext } from '@/Components/context/context';
import { NextRouter, useRouter } from 'next/router';
import { useContext,useState } from 'react';


export const Context = () => {
    const context = useContext(userContext)
    const [storage, setStorage] = useState(
        typeof window !== 'undefined' ?
            JSON.parse(localStorage.getItem('channel') || '{}')
            :
            ""
    )
    const router: NextRouter = useRouter();
    const redirect: string = router.query.redirect as string;
    localStorage.setItem("channel", JSON.stringify(
        {
            ...storage,
            revenue: "1-6",
            currency: "magnam",
            logo: "https://loremflickr.com/640/480?lock=6793668293820416",
            cover_photo: "https://loremflickr.com/640/480?lock=4056800133382144",
            location: "North Jarrellberg",
            url: "https://understated-provider.name",
            is_network: true,
            industry_of_focus: context.audience,
            audience_number: 76074,
            audience_description: {
                age_distribution: context.ageDistribution,
                marital_status:  context.maritalStatus,
                language: context.language,
                income_level:context.incomeLevel
            },
        }))
    router.replace(redirect || '/publisher/channel/psycographics')
}