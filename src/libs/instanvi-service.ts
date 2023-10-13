import { AuthApi } from '@instanvi/client/dist/api';

import configuration from '@/configs/instanvi-service';

export const AuthAPI = new AuthApi(configuration);
