import { ConfigurationParameters } from '@instanvi/client/configuration';
import { Configuration } from '@instanvi/client/dist/configuration';

import { API_URL } from '@/configs/constants';
import { Utils } from '@/utils';

const params: ConfigurationParameters = {
  basePath: API_URL,
  accessToken: Utils.getToken(),
};

const configuration = new Configuration(params);

export default configuration;
