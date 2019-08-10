<template>
	<div id="main-content">
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
	name: 'MainContent',

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
#main-content {
	width: var(--main-content-width);
}
</style>