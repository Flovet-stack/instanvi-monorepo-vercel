import { Configuration } from '@instanvi/client/dist/configuration';
import { ConfigurationParameters } from '@instanvi/client/configuration';
import { Utils } from '../utils';

// const API_URL = process.env.API_URL;

const params: ConfigurationParameters = {
  // basePath: API_URL,
  accessToken: Utils.getToken(),
};

const instanviApiConfig = new Configuration(params);

export default instanviApiConfig;

export * from './react-query-client.config';
