<template>
     <div id="sidebar">
          <Section
               v-for="(item, i) in data"
               :key="i"
               :data="item"
          />
     </div>
</template>

<script>
import Section from './Section';

export default {
     name: 'Sidebar',

     components: {
          Section,
     },

     props: {
          data: {
               type: Array,
               default: () => [],
          },
     },
}
</script>

<style scoped>
#sidebar {
     padding-left: var(--v-space);
     flex: 1;
}
</style>