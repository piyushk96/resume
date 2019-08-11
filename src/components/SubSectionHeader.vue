<template>
	<header>
		<div>
			<a
				v-if="headerData.link"
				:href="headerData.link"
				class="title"
				v-html="headerData.title" />
			<span v-else class="title" v-html="headerData.title" />

			<span class="right">
				{{ numOfItems === 2 ? formatDate(headerData.date) : headerData.location }}
			</span>
		</div>
		<div v-if="numOfItems > 2">
			<i class="sub-title">{{ headerData.subTitle }}</i>
			<span v-if="numOfItems === 4" class="right">{{ formatDate(headerData.date) }}</span>
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
			numOfItems: Object.keys(this.headerData).filter(key => key !== 'link').length,
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
.education .title {
	font-size: 12pt;
	font-weight: 700;
}
.sub-title {
	font-size: 10pt;
	color: var(--main-color);
	font-weight: 600;
}
</style>