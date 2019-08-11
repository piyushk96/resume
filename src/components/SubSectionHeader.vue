<template>
	<header>
		<div>
			<a
				v-if="headerData.link"
				:href="headerData.link"
				class="title"
			>
				{{ headerData.title }}
			</a>
			<span v-else class="title">{{ headerData.title }}</span>
			<span class="right">
				{{ numOfItems === 2 ? formatDate(headerData.date) : headerData.location }}
			</span>
		</div>
		<div v-if="numOfItems === 4">
			<span class="sub-title">{{ headerData.subTitle }}</span>
			<span class="right">{{ formatDate(headerData.date) }}</span>
		</div>
	</header>
</template>

<script>
import {getDateString} from '../utils';

export default {
	name: 'SubSectionHeader',

	props: {
		headerData: {
			type: Object,
			default: () => {},
		},
		title: String,
	},

	data() {
		return {
			numOfItems: Object.keys(this.headerData).length,
		};
	},

	methods: {
		formatDate(date) {
			return getDateString(date);
		}
	}
}
</script>

<style scoped>
header {
	margin: var(--subsection-header-after);
}
a {
	text-decoration: none;
}
.right {
	float: right;
	font-size: 9pt;
	color: var(--light-gray);
	line-height: 14pt;
}
.title {
	font-size: 13pt;
	font-weight: 800;
	color: var(--dark-gray);
}
.sub-title {
	font-size: 10pt;
	color: var(--dark-gray);
}
</style>