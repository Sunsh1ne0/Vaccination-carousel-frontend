import axios from 'axios';

const makeRequest = async (method, url, data = null, params = null) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    // throw new Error(error);
  }
};

export default makeRequest;