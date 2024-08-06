import axios, { type AxiosResponse } from 'axios';
import type { Event } from '@/types';

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
    getAPIEvents(perPage:Number,page:Number){
        return apiClient.get<Event[]>('/events?_limit='+perPage+'&_page='+page)
    },
    getNewAPIEvents(){
        return apiNewClient.get('/students')
    },
    getEventsByID(id:Number) : Promise<AxiosResponse<Event>>{
        return apiClient.get<Event>(`events/${id}`)
    }
}
