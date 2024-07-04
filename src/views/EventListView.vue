<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import NewEventCard from '@/components/NewEventCard.vue';
import Event from '@/types/Event'

import { ref, onMounted } from 'vue';
import EventService from '@/services/EventService';
const events=ref<Event[]>([])
onMounted(()=>{
  EventService.getAPIEvents().then((response)=>{
    events.value=response.data
  })
  })


</script>

<template>
  <h1> Events For Good</h1>
  <!-- new element-->
<div class="events">
  <EventCard  v-for="event in events" :key="event.id" :event="event"/>
  <NewEventCard  v-for ="event in events" :key="event.id" :event="event" />>
</div>
</template>
<style scoped>
.events{
  display:flex;
  flex-direction: column;
  align-items: center;
}
</style>
