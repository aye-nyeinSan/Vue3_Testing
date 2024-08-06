<script setup lang="ts">
import {type StudentEvent} from '@/types'
import StudentCard from '@/components/StudentCard.vue';

import { ref, onMounted } from 'vue';
import EventService from '@/services/EventService';
const events=ref<StudentEvent[]>([])
onMounted(()=>{
  EventService.getNewAPIEvents().then((response)=>{
    events.value=response.data
  })
  })


</script>

<template>
  <h1> Students</h1>
  <!-- new element-->
<div class="events">
    <StudentCard  v-for="event in events" :key="event.id" :event="event"/>
</div>
</template>
<style scoped>
.events{
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>
