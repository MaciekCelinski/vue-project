<template>
	<form @submit.prevent="submitForm">
		<div class="form-control" :class="!email.isValid && 'invalid'">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				@blur="checkValidation"
				v-model.trim="email.val"
			/>
			<p v-if="!email.isValid">Please insert a valid email</p>
		</div>
		<div class="form-control" :class="!message.isValid && 'invalid'">
			<label for="message">Message</label>
			<textarea
				name="message"
				id="message"
				cols="30"
				rows="10"
				v-model.trim="message.val"
				@blur="checkValidation"
			></textarea>
			<p v-if="!message.isValid">Please insert a message</p>
		</div>
		<div class="actions">
			<base-button>Send Message</base-button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			email: {
				val: '',
				isValid: true,
			},
			message: {
				val: '',
				isValid: true,
			},
			formIsValid: false,
		};
	},
	methods: {
		checkValidation(e) {
			if (!this[e.target.id].val) {
				this[e.target.id].isValid = false;
			} else {
				this[e.target.id].isValid = true;
			}

			if (e.target.id === 'email') {
				if (
					!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(
						e.target.value
					)
				) {
					this[e.target.id].isValid = false;
				}
			}
		},
		submitForm() {
			if (this.email.isValid && this.message.isValid) {
				const coachId = this.$route.params.coachId;
				const coach = this.$store.getters['coaches/getCoach'](coachId);

				// this.$store.dispatch({
				// 	type: 'requests/addRequest',
				// 	coach: {
				// 		coachId: coach.id,
				// 		email: this.email.val,
				// 		message: this.message.val,
				// 	},
				// });

				this.$store.dispatch('requests/addRequest', {
					coachId: coach.coachId,
					email: this.email.val,
					message: this.message.val,
				});
 
				this.$router.replace('/requests');
			}
		},
	},
};
</script>

<style scoped>
form {
	margin: 1rem;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 1rem;
}

.form-control {
	margin: 0.5rem 0;
}

label {
	font-weight: bold;
	margin-bottom: 0.5rem;
	display: block;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	border: 1px solid #ccc;
	padding: 0.15rem;
}

input:focus,
textarea:focus {
	border-color: #3d008d;
	background-color: #faf6ff;
	outline: none;
}

.errors {
	font-weight: bold;
	color: red;
}

.actions {
	text-align: center;
}
</style>