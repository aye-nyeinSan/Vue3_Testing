<script setup lang="ts">
  import { ref, onMounted, defineProps } from 'vue';
  import { toRefs } from 'vue';
  import { type Event } from '@/types';

  const props = defineProps<{
    event: Event;
    id: String;
  }>();
  const { event } = toRefs(props);
</script>
<template>
  <p>Edit event here</p>
</template>
