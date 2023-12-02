import { User } from '@instanvi/client/api';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { AuthAPI } from '@/libs/instanvi-service';

export const getAuthUser = (): Promise<AxiosResponse> => {
    return AuthAPI.refreshTokens() as any;
};

export const useUser = (): {
    data: User;
    isLoading: boolean;
} => {
    const { data, isLoading } = useQuery({
        queryKey: ['345ccba9-73ef-43ff-a78b-ed5559a82b41'],
        queryFn: () =>
            getAuthUser().then((res: AxiosResponse) => {

                return res.data.data;

            }),

    });

    return { data, isLoading };
};
