import AsyncStorage from '@react-native-async-storage/async-storage';

const setFirstTimeUse = (): Promise<void> => {
  return AsyncStorage.setItem('isFirstTimeUse', 'true');
};

const getFirstTimeUse = (): Promise<string | null> => {
  return AsyncStorage.getItem('isFirstTimeUse');
};

const setToken = (token: string): Promise<void> => {
  return AsyncStorage.setItem('token', token);
};

const getToken = (): Promise<string | null> => {
  return AsyncStorage.getItem('token');
};

export default {setFirstTimeUse, getFirstTimeUse, setToken, getToken};
