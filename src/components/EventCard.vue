<script setup lang="ts">
  import { ref, defineProps } from 'vue';
  import { type Event } from '@/types';
  import { RouterLink } from 'vue-router';
  defineProps<{
    event: Event;
  }>();
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'event-detail-view', params: { id: event?.id } }"
  >
    <div class="event-class">
      <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
        <span>@{{ event?.time }} on {{ event?.date }}</span>
        <h4>{{ event?.title }}</h4>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped>
 
</style>
