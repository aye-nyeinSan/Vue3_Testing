import axios, { type AxiosResponse } from 'axios';
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/aye-nyeinSan/652115502',
    withCredentials: false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})
const apiNewClient = axios.create({
    baseURL: 'https://dv-student-backend-2019.appspot.com',
    withCredentials: false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})


export default {
    getAPIEvents(){
        return apiClient.get<EventItem[]>('/events')
    },
    getNewAPIEvents(){
        return apiNewClient.get('/students')
    },
    getEventsByID(id:number) : Promise<AxiosResponse<EventItem>>{
        return apiClient.get<EventItem>(`events/${id}`)
    }
}
