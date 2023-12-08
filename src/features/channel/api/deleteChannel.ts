import { useMutation } from '@tanstack/react-query';

import { ChannelAPI } from '@/libs/instanvi-service';
import { useRouter } from 'next/router';

import toast from 'react-hot-toast';

import { AxiosError, AxiosResponse } from 'axios';
import { ChannelId } from '../components/channel/type';

export const Channels = (id: ChannelId): Promise<AxiosResponse> => {
    console.log(id?.id)
    return ChannelAPI.deleteChannel(id?.id) as any;
};



type deleteChannel = {
    // onSuccess?: (data: any) => void;
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occured !!!');
const successResponse = () => toast.success('Deleted with success');


export const deleteChannel = ({

}: deleteChannel = {}) => {
    const router = useRouter()
    const { mutate: submit, isLoading } = useMutation({
        mutationFn: Channels,
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
