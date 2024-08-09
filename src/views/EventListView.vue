<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue';
  //import NewEventCard from '@/components/NewEventCard.vue';
  import { type Event } from '@/types';

  import { ref, onMounted, computed, defineProps, watchEffect } from 'vue';
  import EventService from '@/services/EventService';
import {  useRouter } from 'vue-router';


  const events = ref<Event[] | null>(null);
  const totalEvents = ref(0);
  const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalEvents.value / limit.value);
    return page.value < totalPages;
  });
  const router = useRouter();
  const props = defineProps({
    page: {
      type: Number,
      required: true,
    },
    limit:{
         type: Number,
         required: true,
    }
  });
  const page = computed(() => props.page);
  const limit = computed(()=> props.limit)
  onMounted(() => {
    watchEffect(() => {
     
      EventService.getAPIEvents(limit.value, page.value).then((response) => {
        events.value = response.data;
        totalEvents.value = response.headers['x-total-count'];
      }).catch((error) => {
        // if (error.response && error.response.status === 404) {
        //   router.push({
        //     name: '404-resource-view',
        //     params: { resource: 'event' },
        //   });
        // }
        // else{
        //     router.push({
        //         name: 'network-error-view',
        //     });
        // }
        console.log(error);
        
      })
     
        
        
      
    });
  });
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element-->
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- <NewEventCard  v-for ="event in events" :key="event.id" :event="event" />> -->
       <div class="pagination">
    <RouterLink
     exact-active-class="text-indigo-700"
      :to="{ name: 'event-list-view', query: { page: page - 1 ,limit: props.limit}}"
      rel="prev"
      v-if="page != 1"
    >
      &#60; Prev Page
    </RouterLink>
    <RouterLink
     exact-active-class="text-indigo-700"
      :to="{ name: 'event-list-view', query: { page: page + 1 ,limit: props.limit} }"
      rel="next"
      v-if="hasNextPage"
    >
      Next Page &#62;
    </RouterLink>
  </div>
  </div>

</template>

<style scoped>
 

</style>
