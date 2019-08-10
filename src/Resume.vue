<template>
	<div id="resume">
		<Header :data="resumeData.header" />
		<div class="content-area">
			<MainContent :data="resumeData.mainData" />
			<Sidebar :data="resumeData.sidebar" />
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import resumeData from './assets/data.json';

export default {
	name: 'Resume',

	components: {
		Header,
		MainContent,
		Sidebar,
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
	--header-item-space: 0 0 .15cm;
	--main-content-width: 12cm;	/*11.89**/
	--column-space: .7cm;
	--section-between-space: .5cm;
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

.content-area {
	display: flex;
}
</style>
