<template>
	<section>
		<base-card>
			<h2>{{ fullname }}</h2>
			<h3>Hourly rate : ${{ rate }}/hour</h3>
		</base-card>
	</section>
	<section>
		<base-card>
			<div v-if="!this.$route.path.includes('contact')">
				<h2>Interested? Reach out now!</h2>
				<base-button link :to="contactLink">Contact</base-button>
			</div>

			<router-view></router-view>
		</base-card>
	</section>
	<section>
		<base-card>
			<base-badge
				v-for="area in areas"
				:key="area"
				:type="area"
				:title="area"
			>
			</base-badge>
			<p>{{ description }}</p>
		</base-card>
	</section>
</template>

<script>
export default {
	props: ['coachId'],
	data() {
		return {
			selectedCoach: null,
		};
	},
	computed: {
		fullname() {
			console.log(
				this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
			);
			return (
				this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
			);
		},
		contactLink() {
			return this.$route.path + '/' + 'contact';
		},
		areas() {
			return this.selectedCoach.areas;
		},
		rate() {
			return this.selectedCoach.hourlyRate;
		},
		description() {
			return this.selectedCoach.description;
		},
	},
	created() {
		this.selectedCoach = this.$store.getters['coaches/coaches'].find(
			(coach) => coach.coachId === this.coachId
		);
	},
};
</script>

<style>
</style>