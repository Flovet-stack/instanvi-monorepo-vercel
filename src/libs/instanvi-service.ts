import { AuthApi } from '@instanvi/client/dist/api';
import { ChannelsApi } from '@instanvi/client/dist/api';
import { PersonasApi } from '@instanvi/client/dist/api';
import { CampaignsApi } from '@instanvi/client/dist/api';

import configuration from '@/configs/instanvi-service';


export const PersonasAPI = new PersonasApi(configuration)
export const CampaignsAPI = new CampaignsApi(configuration)
export const AuthAPI = new AuthApi(configuration);
export const ChannelAPI = new ChannelsApi(configuration)
