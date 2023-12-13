import { useMutation } from '@tanstack/react-query'; // Importez useQueryClientimport { useQuery } from "react-query";
import toast from 'react-hot-toast';

import { PersonasAPI } from '@/libs/instanvi-service';

export const useCreatePersona = () => {
  const mutation = useMutation({
    mutationKey: ['createPersona'],
    mutationFn: PersonasAPI.createPersonas as unknown,
    onError: () => toast.error('An error has occurred !!!'),
  });

  return mutation;
};
