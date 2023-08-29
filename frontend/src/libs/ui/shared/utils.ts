import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, apiRoutes } from '../../data/src';
import { StorageKeys } from './utils.types';

const tryCatch = <S, F>(success: () => S, failure: () => F) => {
  try {
    return success();
  } catch {
    return failure();
  }
};

export const setValue = async (key: StorageKeys, value: string | User | null) =>
  tryCatch(
    async () => {
      const data = typeof value === 'object' ? JSON.stringify(value) : value;
      await AsyncStorage.setItem(key, data);
      return true;
    },
    () => false,
  );

export const getValue = async (key: StorageKeys) =>
  tryCatch(
    async () => {
      const result = await AsyncStorage.getItem(key);
      return result;
    },
    () => null,
  );

const isString = (value: unknown): value is string => typeof value === 'string';

export const isAuthorized = async () => {
  const result = await getValue(StorageKeys.ACCESS_TOKEN);
  return isString(result) && result.length > 0;
};

export const safeIntParse = (value: string) => {
  const parsed = parseInt(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const fetchData = async (
  route: string,
  method: HttpMethods,
  data: any,
): Promise<Response> => {
  return fetch(route, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body:
      route === apiRoutes.users || route === apiRoutes.login
        ? JSON.stringify({ ...data, email: data.email.toLowerCase() })
        : JSON.stringify(data),
  });
};
