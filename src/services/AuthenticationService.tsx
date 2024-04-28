import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {ApiContants} from '../contants';
import {getToken} from '../Store';
import {authHeader} from '../utils/Generator';

interface User {
  username: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  status: boolean;
  message: string;
}

interface LoginResponse {
  status: boolean;
  message: string;
}

interface UserCheckResponse {
  status: boolean;
  message: string;
}

interface TokenResponse {
  status: boolean;
  data?: any;
  message?: string;
}

const AuthRequest: AxiosInstance = axios.create({
  baseURL: ApiContants.BACKEND_API.BASE_API_URL,
});

const register = async (user: User): Promise<RegisterResponse> => {
  if (!user?.username || !user?.email || !user?.password) {
    return {status: false, message: 'Please fill up all fields'};
  }
  try {
    let requestBody = {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    };
    let registerResponse: AxiosResponse = await AuthRequest.post(
      ApiContants.BACKEND_API.REGISTER,
      requestBody,
    );
    return registerResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

const login = async (user: User): Promise<LoginResponse> => {
  if (!user?.username || !user?.password) {
    return {status: false, message: 'Please fill up all fields'};
  }
  try {
    let requestBody = {
      username: user?.username,
      password: user?.password,
    };
    let loginResponse: AxiosResponse = await AuthRequest.post(
      ApiContants.BACKEND_API.LOGIN,
      requestBody,
    );
    return loginResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

const checkUserExist = async (
  type: string,
  value: string,
): Promise<UserCheckResponse> => {
  try {
    let params = {[type]: value};
    let userCheckResponse: AxiosResponse = await AuthRequest.get(
      ApiContants.BACKEND_API.USER_EXIST,
      {params},
    );
    return userCheckResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

const refreshToken = async (): Promise<TokenResponse> => {
  try {
    let tokenResponse: AxiosResponse = await AuthRequest.post(
      ApiContants.BACKEND_API.REFRESH_TOKEN,
      {headers: authHeader(getToken())},
    );
    if (tokenResponse?.status === 200) {
      return {status: true, data: tokenResponse?.data};
    } else {
      return {status: false};
    }
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

export default {register, login, checkUserExist, refreshToken};
