import { AuthAPI } from '@instanvi-monorepo/instanvi-api';
import { AuthDto } from '@instanvi/client';
import { AxiosResponse } from 'axios';

// interface loginUserResponse {
//   user: User;
//   access: Access;
// }

// Define the request options with the timestamp as a query parameter
// const requestOptions: RawAxiosRequestConfig = {
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Request-Headers': 'Content-Type, Accept',
//     // Add any other headers you need
//   },
// };

export const loginUser = (data: AuthDto): Promise<AxiosResponse> => {
  try {
    return AuthAPI.login(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// export const useLoginUser = () => {
//   const {
//     mutate: submit,
//     isPending: isLoading,
//     error,
//   } = useMutation({
//     mutationFn: loginUser,
//     onSuccess: () => {
//       instanviQueryClient.clear();
//     },
//   });

//   return { submit, isLoading, error };
// };

// export default useLoginUser;
