<template>
	<base-card>
		<h2>Find Your Coach</h2>
		<span class="filter-option">
			<input
				type="checkbox"
				id="frontend"
				value="frontend"
				@change="toggleCheck"
			/>
			<label for="frontend">Frontend</label>
		</span>
		<span class="filter-option">
			<input
				type="checkbox"
				id="backend"
				value="backend"
				@change="toggleCheck"
			/>
			<label for="backend">Backend</label>
		</span>
		<span class="filter-option">
			<input
				type="checkbox"
				id="career"
				value="career"
				@change="toggleCheck"
			/>
			<label for="career">Career</label>
		</span>
	</base-card>
</template>

<script>
export default {
	data() {
		return {
			filters: [],
		};
	},
	methods: {
		toggleCheck(e) {
			const checkedOption = e.target.value;

			// if (this.filters.includes(checkedOption)) {

			// we could use checked value e.target.checked
			if (!e.target.checked) {
				this.filters = this.filters.filter(
					(option) => option !== checkedOption
				);
			} else {
				this.filters.push(checkedOption);
			}

			this.$emit('filtersChange', this.filters);
		},
	},
};
</script>

<style>
</style>