import { useMutation } from '@tanstack/react-query';

import { CampaignsAPI } from '@/libs/instanvi-service';
import { useRouter } from 'next/router';

import toast from 'react-hot-toast';

import { AxiosError, AxiosResponse } from 'axios';
import { CampaignId } from '../types';

export const Campaigns = (id: CampaignId): Promise<AxiosResponse> => {
    console.log(id?.id)
    return CampaignsAPI.deleteCampaignByUUID(id?.id) as any;
};



type deleteCampaign = {
    // onSuccess?: (data: any) => void;
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occured !!!');
const successResponse = () => toast.success('Deleted with success');


export const deleteCampaign = ({

}: deleteCampaign = {}) => {
    const router = useRouter()
    const { mutate: submit, isLoading } = useMutation({
        mutationFn: Campaigns,
        onSuccess: (data: AxiosResponse) => {
            successResponse();
            console.log(data);
            router.reload()
        },
        onError: (axiosError: AxiosError) => {
            errorResponse()
            // @ts-ignore
            console.log(axiosError);
        },
    });
    return { submit, isLoading };
};
