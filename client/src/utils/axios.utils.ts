import _axios from "axios";
import { getAppConfig } from "src/services/config.service";

// TODO: Add retry

const axios = _axios.create({ baseURL: getAppConfig().appHomeUrl });

axios.interceptors.response.use(
  function (response) {
    if (!response.data) throw new Error("NO_DATA");
    else return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
