import { Configuration } from '@instanvi/client/dist/configuration';

// import { API_URL } from '@/configs/constants';
// import { Utils } from '@/utils';
import { ConfigurationParameters } from '@instanvi/client/configuration';

const API_URL = 'https://api.instanvi.com';

const params: ConfigurationParameters = {
  basePath: API_URL,
  baseOptions: {
    headers: {
      // 'Content-Type': 'application/json',
      'Access-Control-Request-Headers': 'Content-Type',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': 'true',
    },
  },
  //   accessToken: Utils.getToken(),
};

const instanviApiConfig = new Configuration(params);

export default instanviApiConfig;

export * from './react-query-client';

// 'Access-Control-Request-Headers':
// 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
