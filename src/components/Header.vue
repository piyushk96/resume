<template>
	<header>
		<h1>{{ data.name }}</h1>
		<h2>{{ data.title }}</h2>
		<p>{{ data.summary }}</p>
	</header>
</template>

<script>
export default {
	name: 'Header',

	props: {
		data: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style>
header {
	margin-bottom: .5cm;
}
header * {
	margin: var(--header-item-space);
}
h1 {
	color: var(--main-color);
	font-size: 36pt;
	line-height: 36pt;
}
h2 {
	color: var(--dark-gray);
	font-size: 16pt;
	line-height: 16pt;
}
p {
	color: var(--light-gray);
	font-size: 10pt;
}
</style>
