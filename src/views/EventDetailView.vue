<script setup lang="ts">
import { ref,onMounted,defineProps } from 'vue'

import type  Event from "@/type/Event"
import EventService from '@/services/EventService';

const event = ref<Event |null>(null)
const props = defineProps({
    id: String,
    required: true,
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
        <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
        <p> {{event.description}}</p>
    </div>
</template>