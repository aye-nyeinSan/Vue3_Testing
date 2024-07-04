<script setup lang="ts">
import { ref } from 'vue';
import Event from '@/types/Event';
defineProps<{
  event: Event
}>()

</script>

<template>

     
      

    <div class="event-class">
        <h2>{{ event.name}} {{event.surname}}</h2>
        <h2>GPA: {{ event.gpa }}</h2>
        
    </div>

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

