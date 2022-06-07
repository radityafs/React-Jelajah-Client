import axios from 'axios';

export const getActivityOfDestination = async (destination, setActivity) => {
  try {
    setActivity({
      isLoading: true,
      isError: false,
      data: []
    });

    const res = await axios.get(
      `${process.env.REACT_APP_API_BACKEND_URL}/destination/${destination}/activity`
    );

    setActivity({
      isLoading: false,
      isError: false,
      data: res.data
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    setActivity({
      isLoading: false,
      isError: true,
      error: error.message
    });

    return error.message;
  }
};

export const getDetailDestination = async (id, setDetailDestination) => {
  try {
    setDetailDestination({
      isLoading: true,
      isError: false,
      data: []
    });

    const res = await axios.get(
      `${process.env.REACT_APP_API_BACKEND_URL}/destination/${id}`
    );

    setDetailDestination({
      isLoading: false,
      isError: false,
      data: res.data
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    setDetailDestination({
      isLoading: false,
      isError: true,
      error: error.message
    });

    return error.message;
  }
};

export const getDetailActivity = async (id, setDetailActivity) => {
  try {
    setDetailActivity({
      isLoading: true,
      isError: false,
      data: []
    });

    const res = await axios.get(
      `${process.env.REACT_APP_API_BACKEND_URL}/activity/${id}`
    );

    setDetailActivity({
      isLoading: false,
      isError: false,
      data: res.data
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    setDetailActivity({
      isLoading: false,
      isError: true,
      error: error.message
    });

    return error.message;
  }
};
