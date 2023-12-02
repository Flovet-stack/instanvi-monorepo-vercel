import { Channel } from '@instanvi/client/api';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { ChannelAPI } from '../../../libs/instanvi-service';

export const getAllChannel = (): Promise<AxiosResponse> => {
    return ChannelAPI.getAllChannel("467bcc76-bdd7-4849-97ec-b4be33505fc3") as any;
};

export const AllChannels = (): {
    data: Channel;
    isLoading: boolean;
} => {
    const { data, isLoading } = useQuery({
        queryKey: ['auth-user'],
        queryFn: () =>
            getAllChannel().then((res: AxiosResponse) => {
                return res.data.data;
            }),
    });

    return { data, isLoading };
};
