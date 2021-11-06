<template>
	<li>
		<a :href="emailLink">{{ request.email }}</a>
		<p>{{ request.message }}</p>
		<span>
			<base-button :onClick="() => removeRequest(request.id)">Remove request</base-button>
		</span>
	</li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
	props: ['request'],
	computed: {
		emailLink() {
			return `mailto:${this.request.email}`;
		},
	},
	methods: {
		...mapActions('requests', {removeRequest: 'removeRequest'})
	},
};
</script>

<style scoped>
li {
	margin: 1rem 0;
	border: 1px solid #ccc;
	padding: 1rem;
}

a {
	color: #3d008d;
	text-decoration: none;
	font-weight: bold;
}

a:hover,
a:active {
	color: #8d007a;
}

p {
	margin: 2rem 0;
}

span {
	display: flex;
	justify-content: right;
}
</style>