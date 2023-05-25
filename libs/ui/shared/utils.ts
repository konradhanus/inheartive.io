import AsyncStorage from '@react-native-async-storage/async-storage';

const tryCatch = <S, F>(success: () => S, failure: () => F) => {
  try {
    return success();
  } catch {
    return failure();
  }
};

export const setValue = async (key: string, value: string) =>
  tryCatch(
    async () => {
      await AsyncStorage.setItem(key, value);
      return true;
    },
    () => false
  );

export const getValue = async (key: string) =>
  tryCatch(
    async () => {
      const result = await AsyncStorage.getItem(key);
      return result;
    },
    () => null
  );

const isString = (value: unknown): value is string => typeof value === 'string';

export const isAuthorized = async () => {
  const result = await getValue('access_token');
  return isString(result) && result.length > 0;
};

export const safeIntParse = (value: string) => {
  const parsed = parseInt(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};
