<template>
	<section :class="data.title">
		<h3>{{ data.title | uppercase }}</h3>

		<SkillsSubSection
			v-if="data.title === 'skills'"
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
import SkillsSubSection from './SkillsSubSection';

export default {
	name: 'Section',

	components: {
		SubSection,
		SkillsSubSection,
	},

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