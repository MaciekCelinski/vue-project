<template>
	<section>
		<h2>Register as a Coach</h2>
		<coach-form @save-data="registerNewCoach" />
	</section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
	components: { CoachForm },
	methods: {
		registerNewCoach(coachDetails) {
			this.$store.dispatch('coaches/registerCoach', coachDetails);
			this.$router.push('/coaches');
		},
	},
};
</script>

<style>
section {
	margin: auto;
}
h2 {
	text-align: center;
}
</style>