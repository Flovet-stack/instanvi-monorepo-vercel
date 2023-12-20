import { useQuery } from "@tanstack/react-query"; // Importez useQueryClientimport { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";

import { ChannelAPI } from "@/libs/instanvi-service";

export const useChannel = (uuid: string) => {

    // Utilisez une clé de requête dynamique pour suivre les modifications de selectedApp  
    const queryKey = ["channel"];

    const query = useQuery({
        queryKey,
        queryFn: async (): Promise<AxiosResponse> => await ChannelAPI.getChannelByUUID(uuid) as any,
        onError: () => toast.error('An error has occured !!!')
    })

    return query;

};