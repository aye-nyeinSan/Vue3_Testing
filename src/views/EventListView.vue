<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue';
  //import NewEventCard from '@/components/NewEventCard.vue';
  import { type Event } from '@/types';

  import { ref, onMounted, computed, defineProps, watchEffect } from 'vue';
  import EventService from '@/services/EventService';
import {  useRouter } from 'vue-router';
import nProgress from 'nprogress';

  const events = ref<Event[] | null>(null);
  const totalEvents = ref(0);
  const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalEvents.value / 2);
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
      events.value = null;
     
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
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- <NewEventCard  v-for ="event in events" :key="event.id" :event="event" />> -->
  </div>
  <div class="pagination">
    <RouterLink
      id="page-prev"
      :to="{ name: 'event-list-view', query: { page: page - 1 ,limit: props.limit}}"
      rel="prev"
      v-if="page != 1"
    >
      &#60; Prev Page
    </RouterLink>
    <RouterLink
      id="page-next"
      :to="{ name: 'event-list-view', query: { page: page + 1 ,limit: props.limit} }"
      rel="next"
      v-if="hasNextPage"
    >
      Next Page &#62;
    </RouterLink>
  </div>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pagination {
    display: flex;
    justify-content: center;
    width: 290px;
  }
  .pagination a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
  }
  #page-prev {
    text-align: left;
  }
  #page-next {
    text-align: right;
  }
</style>
