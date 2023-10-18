import { Configuration } from '@instanvi/client/dist/configuration';

import { API_URL } from '@/configs/constants';
import { Utils } from '@/utils';

const configuration = new Configuration({
  basePath: API_URL,
  accessToken: Utils.getToken()?.accessToken,

});

export default configuration;
