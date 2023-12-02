import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/libs/instanvi-service';

import { Channel } from '@instanvi/client/api';
import toast from 'react-hot-toast';
import { AxiosError, AxiosResponse } from 'axios';

export const Channels = (data: Channel): Promise<AxiosResponse> => {
    return AuthAPI.me(data) as any;
};

type useChannel = {
    onSuccess?: (data: any) => void;
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occured !!!');
const successResponse = () => toast.success('Email send successfully');


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
