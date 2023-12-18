import { useQuery } from "@tanstack/react-query"; // Importez useQueryClientimport { useQuery } from "react-query";
import toast from "react-hot-toast";
import { AxiosResponse } from "axios";
import { CampaignsAPI } from "@/libs/instanvi-service";

export const useCampaigns = () => {
    // Utilisez une clé de requête dynamique pour suivre les modifications de selectedApp  
    const queryKey = ["campaigns"];

    const query = useQuery({
        queryKey,
        queryFn: async (): Promise<AxiosResponse> => await CampaignsAPI.getAllCampaign("6c28de38-4ac6-4f9f-9b5e-08ffbd700543") as any,
        onError: (err) => { toast.error('An error has occured !!!'); console.log(err) }
    })
    return query;
};
