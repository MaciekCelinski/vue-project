<template>
	<div>
		<form @submit.prevent="login">
			<h2>Login as a Coach</h2>

			<div class="form-control" :class="email.isValid ? '' : 'invalid'">
				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					v-model.trim="email.val"
					@blur="setValidation"
				/>
				<p v-if="!this.email.isValid">Please insert valid email</p>
			</div>

			<div class="button">
				<base-button>Login</base-button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: {
				val: '',
				isValid: true,
			},
		};
	},
	methods: {
		setValidation(e) {
			if (!this[e.target.id].val.length) {
				this[e.target.id].isValid = false;
			} else {
				this[e.target.id].isValid = true;
			}
		},
		login() {
			if (this.email.isValid) {
				const email = this.email.val;

				const allCoaches = this.$store.getters['coaches/coaches'];
				const isCoach = allCoaches.filter(
					(coach) => coach.email === email
				);

				if (isCoach.length > 0) {
					this.$store.dispatch('coaches/setActiveCoach', email);
					this.email.val = '';
					this.$router.replace('/coaches');
				} else {
					this.email.isValid = false;
				}
			}
		},
	},
};
</script>

<style scoped>
form {
	max-width: 600px;
	margin: 50px auto;
	border: 1px solid rgba(147, 147, 147, 0.2);
	border-radius: 10px;
	box-shadow: 3px 3px 10px 3px rgba(147, 147, 147, 0.2);
	padding: 20px 30px;
}

.button {
	display: flex !important;
	justify-content: flex-end;
}

.form-control {
	margin: 2rem 0;
}

.form-control p {
	color: red;
	font-size: 0.7rem;
}

label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input[type='email'] {
	height: 35px;
}

input {
	display: block;
	width: 100%;
	border: 1px solid #ccc;
	font: inherit;
}

input:focus {
	background-color: #f0e6fd;
	outline: none;
	border-color: #3d008d;
}

.invalid label {
	color: red;
}

.invalid input {
	border: 1px solid red;
}
</style>