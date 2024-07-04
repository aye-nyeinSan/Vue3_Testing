import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/aye-nyeinSan/652115502',
    withCredentials: false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})
export default {
    getAPIEvents(){
        return apiClient.get('/events')
    }
}
