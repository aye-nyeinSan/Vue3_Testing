<script setup lang="ts">
  import { ref, onMounted, defineProps } from 'vue';

  import { type Event } from '@/types';
  import EventService from '@/services/EventService';
  import { RouterLink, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useEventStore } from '@/stores/event';



  
 const store = useEventStore()
 const {event} = storeToRefs(store)

  
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav class="py-6">
      <RouterLink class=" font-bold text-gray-700"
  exact-active-class="  m-1 text-indigo-700" :to="{ name: 'event-detail-view' }">Details</RouterLink>
      |
      <RouterLink class=" font-bold  text-gray-700"
  exact-active-class="  m-1 text-indigo-700" :to="{ name: 'event-register-view' }">Register</RouterLink>
      |
      <RouterLink class=" font-bold text-gray-700"
  exact-active-class="  m-1 text-indigo-700" :to="{ name: 'event-edit-view' }">Edit</RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
</template>
