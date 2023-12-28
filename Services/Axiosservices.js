import axios from "axios";
//handle axios globally
/*
manage the playload
manage error handling
manage the api call
manage the business requirement
*/

//for normal routes
export const instance = axios.create({
  baseURL: "/",
  withCredentials: true,
});
//for private routes
export const PrivateRoute = axios.create({
  baseURL: "/",
  withCredentials: true,
});
//manage the api request
//input validation
PrivateRoute.interceptors.request.use(
  (config) => {
    if (config.headers.Authorization) {
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
//manage the api response
PrivateRoute.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    // HandleError(error.response.data.messege || "Something Went Wrong");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // HandleError(error.response.data.messege || "Something Went Wrong");
    return Promise.reject(error);
  }
);
