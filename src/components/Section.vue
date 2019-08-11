<template>
	<section :class="data.title.replace(' ', '_')">
		<h3>{{ data.title | uppercase }}</h3>

		<ListSubSection
			v-if="!!data.items"
			:items="data.items"
		/>
		<SubSection
			v-else
			v-for="(item, i) in data.subSections"
			:key="i"
			:data="item"
			:title="data.title"
		/>
	</section>
</template>

<script>
import SubSection from './SubSection';
import ListSubSection from './ListSubSection';

export default {
	name: 'Section',

	components: {
		SubSection,
		ListSubSection,
	},

	props: {
		data: {
			type: Object,
			default: () => {},
		},
	},
}
</script>

<style scoped>
h3 {
	color: var(--main-color);
	border-bottom: .1cm solid var(--main-color);
	margin: 0 0 .2cm;
	font-size: 16pt;
}
section {
	margin: var(--section-between-space);
}
section:last-child {
	margin: 0;
}
</style>