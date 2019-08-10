<template>
     <div class="sub-section">
          <SubSectionHeader
               :headerData="data.header"
               :title="title"
          />
     </div>
</template>

<script>
import SubSectionHeader from './SubSectionHeader';

export default {
     name: 'SubSection',

     components: {
          SubSectionHeader,
     },

     props: {
          data: {
               type: Object,
               default: () => {},
          },
          title: String,
     },
     created() {
          console.log('**', this.data)
     }
}
</script>

<style scoped>
</style>