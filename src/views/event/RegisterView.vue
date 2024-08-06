<script setup lang="ts">
import { toRefs } from 'vue'

import { type Event }from "@/types"
import { useRouter } from 'vue-router';

import {useMessageStore} from '@/stores/message'
const store = useMessageStore()

const props = defineProps<{
    event: Event,
    id : String
}>()
//eslint-disable-next-line @typescript-eslint/no-unused-vars
const {event} = toRefs(props)
const router = useRouter()
const register=()=>{

    store.updateMessage('You are successfully registered for the event'
    +props.event.title)
    setTimeout(()=>{
       store.resetMessage()
    },3000)
    router.push({name:'event-detail-view',params:{id: props.event.id}})
}



</script>
<template>
    <div v-if="event">
     <p> Register event here</p>
     <button class=' mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' @click="register">Register</button>
    </div>
</template>