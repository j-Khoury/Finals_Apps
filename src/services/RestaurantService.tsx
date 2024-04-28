import {ApiContants} from '../contants';
import axios, {AxiosResponse} from 'axios';
import {authHeader} from '../utils/Generator';
import {getToken} from '../Store';

interface RestaurantResponse {
  status: boolean;
  message: string;
  data?: any;
}

const getRestaurants = async (): Promise<RestaurantResponse> => {
  console.log('RestaurantsService | getRestaurants');
  try {
    let restaurantResponse: AxiosResponse = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.RESTAURANT}`,
      {
        headers: authHeader(getToken()),
      },
    );
    if (restaurantResponse?.status === 200) {
      return {
        status: true,
        message: 'Restaurant data fetched',
        data: restaurantResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: 'Restaurant data not found',
      };
    }
  } catch (error) {
    return {
      status: false,
      message: 'Restaurant data not found',
    };
  }
};

const getOneRestaurantById = async (
  restaurantId: string,
): Promise<RestaurantResponse> => {
  console.log('RestaurantsService | getOneRestaurantById');
  try {
    let restaurantResponse: AxiosResponse = await axios.get(
      `${ApiContants.BACKEND_API.BASE_API_URL}${ApiContants.BACKEND_API.RESTAURANT}/${restaurantId}`,
      {
        headers: authHeader(getToken()),
      },
    );
    if (restaurantResponse?.status === 200) {
      return {
        status: true,
        message: 'Restaurant data fetched',
        data: restaurantResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: 'Restaurant data not found',
      };
    }
  } catch (error) {
    return {
      status: false,
      message: 'Restaurant data not found',
    };
  }
};

export default {getRestaurants, getOneRestaurantById};
