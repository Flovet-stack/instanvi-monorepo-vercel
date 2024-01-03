import { AxiosResponse } from 'axios';
import { PeopleAPI } from '../config/api.config';
import { PeopleDto } from '@instanvi/client';

export const getAllPeople = (projectUUID: string): Promise<AxiosResponse> => {
  try {
    return PeopleAPI.getAllPeople(projectUUID);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createPerson = (
  data: PeopleDto,
  projectUUID: string
): Promise<AxiosResponse> => {
  try {
    return PeopleAPI.create(projectUUID, data);
  } catch (error) {
    return Promise.reject(error);
  }
};
