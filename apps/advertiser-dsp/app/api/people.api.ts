import { AxiosResponse } from 'axios';
import { PeopleAPI } from '../config/api.config';

export const getAllPeople = (projectUUID: string): Promise<AxiosResponse> => {
  try {
    return PeopleAPI.getAllPeople(projectUUID);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createPerson = (projectUUID: string): Promise<AxiosResponse> => {
  try {
    return PeopleAPI.create(projectUUID);
  } catch (error) {
    return Promise.reject(error);
  }
};
