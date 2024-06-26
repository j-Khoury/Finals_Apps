import {ApiContants} from '../contants';
import axios from 'axios';
import {authHeader} from '../utils/Generator';
import {getToken} from '../Store';

interface UserDataResponse {
  status: boolean;
  message: string;
  data?: any;
}

const getUserData = async (): Promise<UserDataResponse> => {
  console.log('UserService | getUserData');
  try {
    let userResponse = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.USER}/get-user`,
      {
        headers: authHeader(getToken()),
      },
    );

    if (userResponse?.status === 200) {
      return {
        status: true,
        message: 'User data fetched',
        data: userResponse?.data,
      };
    } else {
      return {
        status: false,
        message: 'User data not found',
      };
    }
  } catch (error) {
    return {
      status: false,
      message: error?.response?.data?.message
        ? error?.response?.data?.message
        : 'User data not found',
    };
  }
};

export default {getUserData};
