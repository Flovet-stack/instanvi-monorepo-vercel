import { useMutation } from '@tanstack/react-query';

import { ChannelAPI } from '@/libs/instanvi-service';

import { Channel } from '@instanvi/client/api';

import toast from 'react-hot-toast';

import { AxiosError, AxiosResponse } from 'axios';

export const Channels = (data: Channel): Promise<AxiosResponse> => {
    return ChannelAPI.createChannel({
        age_distribution:
            [
                "1-5",
                "1-5"
            ],
        bio: "I'm a good guy",
        category: "EVENT",
        cover_photo: "https://images.icon",
        currency: "FCFA",
        first_name: "jamison",
        income_levels:
            [
                "architecto",
                "reprehenderit"
            ],
        industry: "Heath Care",
        industry_of_focus:
            [
                "labore",
                "odit"
            ],
        is_network: false,
        languages:
            [
                "EN",
                "FR"
            ],
        last_name: "derilsan",
        location: "Douala",
        logo: "https://images.icon",
        marital_status:
            [
                "molestiae",
                "sapiente"
            ],
        name: "Movisco",
        optimized:
            [
                "Direct Sales (Commissions)"
            ],
        revenue: "1-2",
        sub_category: "Cold Calling",
        team_size: "0-5",
        url: "https://instanvi.com"
    }) as any;
};

const data = {
    "name": "Tromp, Swaniawski and Kihn",
    "bio": "Voluptatibus quis delectus cupiditate minima magnam saepe provident asperiores.",
    "first_name": "Maximus",
    "last_name": "Stehr",
    "industry": "tempore",
    "team_size": "1-6",
    "revenue": "1-6",
    "currency": "deserunt",
    "logo": "https://loremflickr.com/640/480?lock=4760314874691584",
    "cover_photo": "https://loremflickr.com/640/480?lock=3039880521187328",
    "location": "Hilpertburgh",
    "url": "https://nifty-adrenalin.com/",
    "is_network": true,
    "category": "EVENT",
    "sub_category": "expedita",
    "industry_of_focus": [
        "labore",
        "odit"
    ],
    "age_distribution": [
        "1-5",
        "1-5"
    ],
    "marital_status": [
        "molestiae",
        "sapiente"
    ],
    "languages": [
        "FR",
        "EN"
    ],
    "income_levels": [
        "architecto",
        "reprehenderit"
    ],
    "optimized": [
        "necessitatibus",
        "impedit"
    ]
}

type useChannel = {
    onSuccess?: (data: any) => void;
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occured !!!');
const successResponse = () => toast.success('Saved with success');


export const useChannel = ({
    onSuccess,
}: useChannel = {}) => {
    const { mutate: submit, isLoading } = useMutation({
        mutationFn: Channels,
        onSuccess: (data: AxiosResponse) => {
            successResponse();
            console.log(data)
            onSuccess?.(data.data.data);
        },
        onError: (axiosError: AxiosError) => {
            errorResponse()
            // @ts-ignore
            console.log(axiosError);
        },
    });
    return { submit, isLoading };
};
