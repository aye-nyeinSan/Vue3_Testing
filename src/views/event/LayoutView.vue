<script setup lang="ts">
  import { ref, onMounted, defineProps } from 'vue';

  import { type Event } from '@/types';
  import EventService from '@/services/EventService';
  import { RouterLink } from 'vue-router';

  const event = ref<Event | null>(null);
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  });

  //Initially , component in template will be loaded before onMounted
  onMounted(() => {
    EventService.getEventsByID(parseInt(props.id))
      .then((res) => {
       // console.log('res', res.data);

        event.value = res.data;
      })
      .catch((err) => {
        console.log('There was an error', err);
      });
  });
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink>
      |
      <RouterLink :to="{ name: 'event-register-view' }">Register</RouterLink>
      |
      <RouterLink :to="{ name: 'event-edit-view' }">Edit</RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
</template>
