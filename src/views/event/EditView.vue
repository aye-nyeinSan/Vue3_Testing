<script setup lang="ts">
import { ref,onMounted,defineProps } from 'vue'

import { type Event }from "@/types"
import EventService from '@/services/EventService';

const event = ref<Event |null>(null)
const props = defineProps({
    id: String,
})

//Initially , component in template will be loaded before onMounted
onMounted(()=>{
    EventService.getEventsByID(Number(props.id))
    .then((res)=>{
        console.log("res",res.data);
        
    event.value = res.data

})
.catch((err)=>{
    console.log('There was an error',err)
})
})




</script>
<template>
    <div v-if="event">
        <h1>{{event.title}}</h1>
        <nav>
            <router-link :to="{name:'event-detail-view', params: {id}}">Details</router-link>
            |
            <router-link :to="{name:'event-register-view', params: {id}}">Register</router-link>
            |
            <router-link :to="{name:'event-edit-view', params: {id}}">Edit</router-link>
            
        </nav>
        <p> Edit event here </p>
    </div>
</template>