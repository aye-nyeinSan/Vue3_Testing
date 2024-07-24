<script setup lang="ts">
import { toRefs } from 'vue'

import { type Event }from "@/types"
import { useRouter } from 'vue-router';

const props = defineProps<{
    event: Event,
    id : String
}>()
//eslint-disable-next-line @typescript-eslint/no-unused-vars
const {event} = toRefs(props)
const router = useRouter()
const register=()=>{
    console.log('Register event here')
    router.push({name:'event-detail-view'})
}



</script>
<template>
    <div v-if="event">
     <p> Register event here</p>
     <button @click="register">Register</button>
    </div>
</template>