import { AuthApi, PersonasApi } from '@instanvi/client/dist/api';
// import {  } from '@instanvi/client/dist/api';
// import { AuthApi } from '@instanvi/client/dist/api';
// import { AuthApi } from '@instanvi/client/dist/api';

import configuration from '@/configs/instanvi-service';

export const AuthAPI = new AuthApi(configuration);
export const PersonasAPI = new PersonasApi(configuration);
