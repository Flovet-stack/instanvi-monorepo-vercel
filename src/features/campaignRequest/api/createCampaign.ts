import { useMutation } from '@tanstack/react-query';

import { CampaignsAPI } from '@/libs/instanvi-service';

import { Campaign } from '@instanvi/client/api';

import toast from 'react-hot-toast';

import { AxiosError, AxiosResponse } from 'axios';

export const Channels = (data: Campaign): Promise<AxiosResponse> => {
    console.log(data)

    return CampaignsAPI.createCampaign("6c28de38-4ac6-4f9f-9b5e-08ffbd700543", data) as any;
};

type useChannel = {
    onSuccess?: (data: any) => void;
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occured !!!');
const successResponse = () => toast.success('Saved with success');


export const useCampaign = ({
    onSuccess,
}: useChannel = {}) => {
    const { mutate: submit, isLoading } = useMutation({
        mutationFn: Channels,
        onSuccess: (data: AxiosResponse) => {
            successResponse();
            console.log(data)
            onSuccess?.(data.data.data);
            window.location = "/publisher/campaignRequest"

        },
        onError: (axiosError: AxiosError) => {
            errorResponse()
            // @ts-ignore
            console.log(axiosError);
        },
    });
    return { submit, isLoading };
};
