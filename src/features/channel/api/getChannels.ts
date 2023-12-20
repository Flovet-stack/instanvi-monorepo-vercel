import { useQuery } from "@tanstack/react-query"; // Importez useQueryClientimport { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";

import { ChannelAPI } from "@/libs/instanvi-service";

export const useChannels = () => {
    // Utilisez une clé de requête dynamique pour suivre les modifications de selectedApp  
    const queryKey = ["channels"];

    const query = useQuery({
        queryKey,
        queryFn: async (): Promise<AxiosResponse> => await ChannelAPI.getAllChannel() as any,
        onError: (err) => { toast.error('An error has occured !!!'); console.log(err) }
    })
    return query;
};
