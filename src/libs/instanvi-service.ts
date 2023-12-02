import { AuthApi } from '@instanvi/client/dist/api';
// import {  } from '@instanvi/client/dist/api';
import { ChannelsApi } from '@instanvi/client/dist/api';
// import { AuthApi } from '@instanvi/client/dist/api';


import configuration from '@/configs/instanvi-service';

export const AuthAPI = new AuthApi(configuration);
export const ChannelAPI = new ChannelsApi(configuration)
