import { useQuery } from "@tanstack/react-query"; // Importez useQueryClientimport { useQuery } from "react-query";
import toast from "react-hot-toast";
import { AxiosResponse } from "axios";
import { PersonasAPI } from "@/libs/instanvi-service";

export const usePersonas = (projectUUID: string) => {

    const queryKey = ["personas"];

    const query = useQuery({
        queryKey,
        queryFn: async (): Promise<AxiosResponse> => await PersonasAPI.getAllPersonas(projectUUID) as any,
        onError: () => toast.error('An error has occured !!!')
    })
    return query;

};