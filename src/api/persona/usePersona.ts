import { useQuery } from '@tanstack/react-query'; // Importez useQueryClientimport { useQuery } from "react-query";
import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { PersonasAPI } from '@/libs/instanvi-service';

export const usePersona = (personaUUID?: string) => {
  const queryKey = ['persona'];

  const query = useQuery({
    queryKey,
    queryFn: async (): Promise<AxiosResponse> =>
      (await personaUUID)
        ? (PersonasAPI.getPersonasByUUID(personaUUID || 'ss') as any)
        : '',
    onError: () => {
      toast.error('An error has occured !!!');
    },
  });

  return query;
};
