<template>
	<div class="sub-section">
		<SubSectionHeader
			:headerData="data.header"
			:title="title"
		/>
		<ul class="content" v-if="Array.isArray(data.content)">
			<li v-for="(item, i) in data.content" :key="i" v-html="item" />
		</ul>
		<p class="content" v-else v-html="data.content" />
	</div>
</template>

<script>
import SubSectionHeader from './SubSectionHeader';
import {getDateString} from '../utils';

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

	methods: {
		formatDate(date) {
			return getDateString(date);
		},
	},
}
</script>

<style scoped>
.sub-section {
	margin: var(--subsection-space);
}
.content {
	margin: 0;
	color: var(--light-gray);
	font-size: 10pt;
}
ul.content {
	padding-left: .4cm;
	margin-left: 3px;
}
ul.content li {
	margin-bottom: .1cm;
}
.content >>> b {
	font-weight: 800;
}
</style>