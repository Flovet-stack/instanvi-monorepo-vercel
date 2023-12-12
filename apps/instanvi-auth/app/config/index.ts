import { Configuration } from '@instanvi/client/dist/configuration';

// import { API_URL } from '@/configs/constants';
// import { Utils } from '@/utils';
import { ConfigurationParameters } from '@instanvi/client/configuration';
import { Utils } from '../utils';

const API_URL = 'https://api.instanvi.com';

const params: ConfigurationParameters = {
  basePath: API_URL,
  accessToken: Utils.getToken(),
};

const instanviApiConfig = new Configuration(params);

export default instanviApiConfig;

export * from './react-query-client.config';
