<template>
	<the-header />
	<p class="error" v-if="error">
		{{ error }}
	</p>
	<router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
	components: { TheHeader },
	data() {
		return {
			error: '',
		};
	},
	async created() {
		try {
			if (localStorage.getItem('activeCoach')) {
				const coachId = localStorage.getItem('activeCoach');
				await this.$store.dispatch('coaches/setActiveCoach', coachId);
			}

			await this.$store.dispatch('coaches/setCoaches');
		} catch (error) {
			this.error = error.message || 'Something went wrong';
		}
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
	box-sizing: border-box;
}

html {
	font-family: 'Roboto', sans-serif;
}

body {
	margin: 0;
}
.error {
	color: white;
	margin: auto;
	font-size: 1.2rem;
	padding: 10px 0;
	background: rgb(236, 23, 23);
	text-align: center;
}
</style>