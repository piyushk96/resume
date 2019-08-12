<template>
	<div class="sub-section">
		<SubSectionHeader
			:headerData="data.header"
			:title="title"
		/>
		<div class="content" v-if="title === 'education'">
			<div
				v-for="(item, i) in data.content"
				:key="i"
				style="display: flex; justify-content: space-between"
			>
				<span>{{ formatDate(item.date) }}</span>
				<template v-if="item.class">
					<span>-</span>
					<span>{{ item.class }}<sup>th</sup></span>
					<span>-</span>
				</template>
				<span class="right">{{ item.aggregate }}</span>
			</div>
		</div>
		<ul class="content" v-else-if="Array.isArray(data.content)">
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
			default: () => ({
				header: {},
				content: "",
			}),
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
.education .sub-section {
	margin: var(--education-subsection-space);
}
.content {
	margin: 0;
	color: var(--light-gray);
	font-size: 10.5pt;
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
.content >>> a {
	text-decoration: none;
	color: var(--light-gray);
}
.right {
	text-align: right;
	width: 1.5cm;
}
</style>