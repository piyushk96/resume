<template>
     <section>
          <h3>{{ data.title | uppercase }}</h3>
          <!-- <SubSection
               v-for="(item, i) in data.subSections"
               :key="i"
               :data="item"
          /> -->
     </section>
</template>

<script>
export default {
     name: 'Section',

     props: {
          data: {
               type: Object,
               default: () => ({
                    title: "",
                    subSections: [],
               }),
          },
     },
}
</script>

<style scoped>
h3 {
     color: var(--main-color);
     border-bottom: .15cm solid var(--main-color);
     margin: 0;
}
</style>