import { Channel } from '@instanvi/client/api';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { ChannelAPI } from '@/libs/instanvi-service';



export const Channels = (data: Channel): Promise<AxiosResponse> => {
    console.log(data)

    return ChannelAPI.createChannel(data) as any;
};

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
            window.location = "/publisher/channel"
            localStorage.removeItem("channel")
        },
        onError: (axiosError: AxiosError) => {
            errorResponse()
            // @ts-ignore
            console.log(axiosError);
        },
    });
    return { submit, isLoading };
};
