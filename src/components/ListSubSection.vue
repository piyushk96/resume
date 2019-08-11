<template>
	<div class="sub-section">
		<template v-if="Array.isArray(items[0])">
			<ul
				v-for="(item, i) in items"
				:key="i"
				class="multi-col"
			>
				<li v-for="(listItem, j) in item" :key="j">
					{{ listItem }}
				</li>
			</ul>
		</template>
		<ul v-else class="single-col">
			<li v-for="(item, i) in items" :key="i">
				<font-awesome :icon="item.icon" />
				<a v-if="item.link" :href="item.link">{{ item.value }}</a>
				<span v-else>{{ item.value }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ListSubSection',

	props: {
		items: {
			type: Array,
			default: () => [],
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
	font-size: 10pt;
	margin: 0;
}
ul.multi-col {
	margin: 0 .5cm 0 0;
}
ul.single-col {
	list-style: none;
	padding: 0;
}
li {
	margin-bottom: .1cm;
	font-weight: 600;
}
.personal_details li {
	font-size: 11pt
}
.single-col li:not(:last-child) {
	display: flex;
	margin-bottom: .2cm;
}
li svg {
	color: var(--main-color);
	margin: 0 .3cm 0 .1cm;
	font-size: 1.1em;
	width: .5cm !important;
}
a {
	text-decoration: none;
	color: var(--light-gray)
}
</style>
