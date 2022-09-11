import Axios from "axios";

Axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("There is an Error: ", error);
    alert("Something went wrong during deleting the poost!");
  }

  return Promise.reject(error);
});

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
};
