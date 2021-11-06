<template>
	<base-card>
		<h1>Request Received</h1>
		<ul v-for="request in requests" :key="request.id">
			<request-item :request="request" />
		</ul>
	</base-card>
</template>

<script>
import { mapGetters } from 'vuex';
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
	components: { RequestItem },
	computed: {
		...mapGetters('requests', { requests: 'requests' }),
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
</style>