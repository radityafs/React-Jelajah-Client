import {
  GET_ACTIVITY_FAILED,
  GET_ACTIVITY_PENDING,
  GET_ACTIVITY_SUCCESS
} from '../actions/types';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null
};

const activityOfDestination = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITY_FAILED:
      return { ...state, isError: true };
    case GET_ACTIVITY_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: action.payload.data
      };
    case GET_ACTIVITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default activityOfDestination;
