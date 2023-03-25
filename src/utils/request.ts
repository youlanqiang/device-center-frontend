import axios from 'axios'
import qs from 'qs'
import { Message } from '@arco-design/web-vue';

axios.defaults.baseURL = process.env.APP_BASE_URL
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*";


axios.interceptors.request.use(function (config) {
    if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
    ) {
        // qs序列化
        config.data = qs.parse(config.data);
    }

    return config;
}, error => {
    Message.error({ content: error.data.error.message, duration: 2000 })
    return Promise.reject(error.data.error.message);
})




export default axios