import axios from 'axios';

const instanciaAxios = axios.create();
instanciaAxios.defaults.baseURL = 'http://localhost:8000/api';


instanciaAxios.interceptors.request.use((config) => {
   const token_seguridad = window.localStorage.getItem("token_seguridad");
   if (token_seguridad != null) {
       config.headers.Authorization = 'Bearer ' + token_seguridad;
   }
   return config;
},
   error => {
       return Promise.reject(error);
   }
);

//objeto que representa las peticiones genericas
const requestGenerico = {
   get: (url, body) => instanciaAxios.get(url, body),
   post: (url, body) => instanciaAxios.post(url, body),
   put: (url, body) => instanciaAxios.put(url, body),
   delete: (url, body) => instanciaAxios.delete(url, body)
};

export default requestGenerico;