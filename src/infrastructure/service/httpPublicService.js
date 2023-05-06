import axios from 'axios';

const instancePublic = axios.create();

instancePublic.defaults.baseURL = "http://localhost:8000/api";

instancePublic.CancelToken = axios.CancelToken;
instancePublic.isCancel = axios.isCancel;

//objeto que representa las peticiones genericas
const requestGenericoPublico = {
    get: (url, body) => instancePublic.get(url, body),
    post: (url, body) => instancePublic.post(url,body),
    put: (url, body) => instancePublic.put(url,body),
    delete: (url, body) => instancePublic.delete(url, body)
};

//objeto que representa la instancia publica que no requiere login
export default requestGenericoPublico;