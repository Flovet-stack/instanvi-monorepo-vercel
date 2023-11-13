import { useMutation } from '@tanstack/react-query';

import { AuthAPI } from '@/libs/instanvi-service';

import { ForgotPasswordEmailDto } from '@instanvi/client/api';
import toast from 'react-hot-toast';
import { AxiosError, AxiosResponse } from 'axios';

export const EmailPassword = (data: ForgotPasswordEmailDto): Promise<AxiosResponse> => {
    return AuthAPI.forgotPasswordByEmail(data) as any;
};

type useForgotenPassword = {
    onSuccess?: (data: any) => void;
};

// customize your notification in different file
const errorResponse = () => toast.error('An error has occured !!!');
const successResponse = () => toast.success('Email send successfully');


export const useForgotenPassword = ({
    onSuccess,
}: useForgotenPassword = {}) => {
    const { mutate: submit, isLoading } = useMutation({
        mutationFn: EmailPassword,
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
