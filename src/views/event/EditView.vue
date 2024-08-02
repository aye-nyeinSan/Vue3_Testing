<script setup lang="ts">
  import { ref, onMounted, defineProps } from 'vue';
  import { toRefs } from 'vue';
  import { type Event } from '@/types';

  import { useMessageStore } from '@/stores/message';
import router from '@/router';
  const store = useMessageStore();

  const props = defineProps<{
    event: Event;
    id: String;
  }>();
  const { event } = toRefs(props);
  const edit=()=>{
    console.log('Edit event here');
    store.updateMessage('You are successfully edited the event: '+props.event.title);
    setTimeout(()=>{
      store.resetMessage();
    },3000);
    router.push({name:'event-detail-view',params:{id: props.event.id}});
  }
</script>
<template>
  <p>Edit event here</p>
  <button @click="edit">Submit</button>
</template>
