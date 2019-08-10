<template>
	<div class="sub-section">
		<ul>
			<li v-for="(item, i) in items[0]" :key="i">
				{{ item }}
			</li>
		</ul>
		<ul>
			<li v-for="(item, i) in items[1]" :key="i">
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'SkillsSubSection',

	props: {
		items: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style scoped>
.sub-section {
	margin: var(--subsection-space);
}
ul {
	display: inline-block;
	color: var(--light-gray);
	margin: 0 .5cm 0 0;
	font-size: 10pt;
}
li {
	margin-bottom: .1cm;
}
</style>
