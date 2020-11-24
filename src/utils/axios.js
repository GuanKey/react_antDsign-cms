import axios from "axios";

var baseURL='http://localhost:9000/api';

const instance = axios.create({
  baseURL: baseURL,
  timeout:7000,
  headers:{}
});

instance.interceptors.request.use(
  function(config) {

    return config;
  },
  function(error) {

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
      if(response.status===200){
        return response.data.data || response.data;
      }else{
          console.log('请求失败')
      }
  },
  function(error) {

    return Promise.reject(error);
  }
);


export default instance