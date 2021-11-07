<template>
	<p class="error" v-if="error">
		{{ error }}
	</p>
	<base-card>
		<h1>Request Received</h1>
		<p v-if="requests.length === 0">No requests found</p>
		<ul v-else v-for="request in requests" :key="request.id">
			<request-item :request="request" />
		</ul>
	</base-card>
</template>

<script>
import { mapGetters } from 'vuex';
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
	data() {
		return {
			error: '',
		};
	},
	components: { RequestItem },
	computed: {
		...mapGetters('requests', { requests: 'requests' }),
	},
	async created() {
		try {
			await this.$store.dispatch('requests/setRequests');
		} catch (error) {
			this.error = error.message || 'Something went wrong';
		}
	},
};
</script>

<style scoped>
header {
	text-align: center;
}

ul {
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	max-width: 30rem;
}

h1 {
	text-align: center;
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