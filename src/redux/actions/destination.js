import axios from 'axios';
import {
  GET_DESTINATION_PENDING,
  GET_DESTINATION_SUCCESS,
  GET_DESTINATION_FAILED
} from './types';

export const getDestination = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_DESTINATION_PENDING,
      payload: null
    });

    const res = await axios.get(
      `${process.env.REACT_APP_API_BACKEND_URL}/destination`
    );

    dispatch({
      type: GET_DESTINATION_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_DESTINATION_FAILED,
      payload: error.message
    });
  }
};
