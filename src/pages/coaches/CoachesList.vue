<template>
	<section>
		<coach-filter @filtersChange="setFilters" />
	</section>
	<section v-if="isLoading">
		<h3>Loading...</h3>
	</section>
	<section v-else>
		<base-card>
			<div class="control">
				<base-button mode="outline">Refresh</base-button>
				<base-button link to="/register">Register a Coach</base-button>
			</div>
			<ul v-if="hasCoaches">
				<li v-for="coach in filteredCoaches" :key="coach.coachId">
					<coach-item :coach="coach" />
				</li>
			</ul>
			<h3 v-else>No Coaches Found !!</h3>
		</base-card>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';

export default {
	components: { CoachItem, BaseButton, CoachFilter },
	computed: {
		// ...mapGetters('coaches', { filteredCoaches: 'coaches' }),
		filteredCoaches() {
			const coaches = this.$store.getters['coaches/coaches'];
			const newCoaches = [];

			coaches.map((coach) => {
				this.activeFilters.map((filter) => {
					if (
						coach.areas.includes(filter) &&
						!newCoaches.includes(coach)
					) {
						newCoaches.push(coach);
					}
				});
			});

			return newCoaches;
		},
		...mapGetters('coaches', ['hasCoaches']),
	},
	data() {
		return {
			activeFilters: [],
			isLoading: false,
		};
	},
	methods: {
		setFilters(filters) {
			this.activeFilters = filters;
		},
	},
};
</script>

<style>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.control {
	display: flex;
	justify-content: space-between;
}
</style>