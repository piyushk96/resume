<template>
	<div id="resume">
		<Header :data="resumeData.header" />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import resumeData from './assets/data.json';

export default {
	name: 'Resume',

	components: {
		Header,
	},

	data() {
		return {
			resumeData,
}
	},
};
</script>

<style>
:root {
	--main-color: #2F5496;
	--dark-gray: #2E2E2E;
	--light-gray: #666666;
	--header-item-space: 0 0 .1cm;
}

#resume {
	font-family: Lato, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	border: 1px solid black;
	margin: auto;

	/* A4 Paper with 1cm margins  */
	width: 210mm;
	height: 297mm;
	padding: 1cm;
}

#resume * {
	box-sizing: border-box;
}
</style>
