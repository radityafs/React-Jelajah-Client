import axios from 'axios';

export const login = async (data, setErrors) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BACKEND_URL}/login`,
      data,
      {
        timeout: 5000
      }
    );

    localStorage.setItem('token', res.data.data.token.token);
    localStorage.setItem('data', JSON.stringify(res.data.data.data));

    return true;
  } catch (error) {
    setErrors({ status: true, message: error.message });

    return false;
  }
};

export const register = async (data, setErrors) => {
  try {
    const dataRegister = await axios.post(
      `${process.env.REACT_APP_API_BACKEND_URL}/register`,
      data
    );
    if (dataRegister.data.status === 'success') {
      localStorage.setItem('token', dataRegister.data.data.token.token);

      return true;
    } else {
      setErrors([{ status: true, msg: data.data.message }]);
    }

    localStorage.setItem('token', data.data.token.token);
  } catch (error) {
    if (error.response.status === 400) {
      setErrors([{ status: true, msg: error.response.data.message }]);
    } else {
      setErrors([{ status: true, msg: error.message }]);
    }
    return false;
  }
};

export const forgot = async (data, setErrors) => {
  try {
    await axios.put(`${process.env.REACT_APP_API_BACKEND_URL}/forgot`, data);
    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};

export const reset = async (token, data, setErrors) => {
  try {
    await axios.put(
      `${process.env.REACT_APP_API_BACKEND_URL}/reset/${token}`,
      data
    );
    return true;
  } catch (error) {
    if (error.response) {
      if (Array.isArray(error.response.data.error)) {
        setErrors(error.response.data.error);
      } else {
        setErrors([{ msg: error.response.data.error }]);
      }
    } else {
      setErrors([{ msg: error.message }]);
    }

    return false;
  }
};
