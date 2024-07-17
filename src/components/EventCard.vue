<script setup lang="ts">
import { ref } from 'vue';
import Event from '@/types/Event';
import { RouterLink } from 'vue-router';
defineProps<{
  event: Event
}>()
// const event = ref({
//     id: 5928101,
//     category: 'animal welfare',
//     title: 'Cat Adoption Day',
//     description:'Find your new feline friend at this event!',
//     location: 'Meow Town',
//     date: 'Jaunary 28,2022',
//     time: '12:00',
//     petsAllowed: true,
//     organizer:'Kat Laydee'
// })
</script>

<template>

     
      <RouterLink :to="{name:'event-detail', params:{id: event?.id}}">

    <div class="event-class">
        <div class="event-card">
            <span>@{{event?.time}} on {{event?.date}}</span>
            <h4>{{ event?.title }}</h4>
        </div>
    </div>
</RouterLink>

</template>
<style scoped>
.event-class{
padding: 20px;
width: 250px;
cursor: pointer;
border: 1px solid #39495c;
margin-bottom: 18px;
}
.event-class:hover{
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0,0,0.2);
}
</style>

