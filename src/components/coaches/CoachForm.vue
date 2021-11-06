<template>
	<form @submit.prevent="submitForm">
		<div class="form-control" :class="firstName.isValid ? '' : 'invalid'">
			<label for="firstName">First name</label>
			<input
				type="text"
				id="firstName"
				v-model.trim="firstName.val"
				@blur="setValidation"
			/>
			<p v-if="!this.firstName.isValid">
				Please insert correct first name
			</p>
		</div>
		<div class="form-control" :class="lastName.isValid ? '' : 'invalid'">
			<label for="lastName">Last name</label>
			<input
				type="text"
				id="lastName"
				v-model.trim="lastName.val"
				@blur="setValidation"
			/>
			<p v-if="!this.lastName.isValid">Please insert correct last name</p>
		</div>
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
		<div class="form-control" :class="description.isValid ? '' : 'invalid'">
			<label for="description">Description</label>
			<textarea
				id="description"
				rows="5"
				v-model.trim="description.val"
				@blur="setValidation"
			/>
			<p v-if="!this.description.isValid">Please insert description</p>
		</div>
		<div class="form-control">
			<label for="rate">Hourly Rate</label>
			<select v-model="rate">
				<option value="25" selected>25</option>
				<option value="30">30</option>
				<option value="35">35</option>
				<option value="50">50</option>
			</select>
		</div>
		<div class="form-control" :class="areas.isValid ? '' : 'invalid'">
			<h4>Areas of Expertise</h4>
			<div>
				<input
					type="checkbox"
					id="areas"
					value="frontend"
					v-model="areas.val"
					@change="setValidation"
				/>
				<label for="frontend">frontend</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="areas"
					value="backend"
					v-model="areas.val"
					@change="setValidation"
				/>
				<label for="backend">backend</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="areas"
					value="career"
					v-model="areas.val"
				/>
				<label for="career">career</label>
			</div>
			<p v-if="!this.areas.isValid">
				Please select any area of expertise
			</p>
		</div>
		<base-button>Register</base-button>
	</form>
</template>

<script>
export default {
	emits: ['save-data'],
	data() {
		return {
			firstName: {
				val: '',
				isValid: true,
			},
			lastName: {
				val: '',
				isValid: true,
			},
			email: {
				val: '',
				isValid: true,
			},
			description: {
				val: '',
				isValid: true,
			},
			rate: 25,
			areas: {
				val: [],
				isValid: true,
			},
			formIsValid: false,
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
		validateForm() {
			if (
				this.firstName.val.trim() &&
				this.firstName.isValid &&
				this.lastName.val.trim() &&
				this.lastName.isValid &&
				this.description.val.trim() &&
				this.description.isValid &&
				this.areas.val &&
				this.areas.isValid
			) {
				this.formIsValid = true;
			} else {
				this.formIsValid = false;
			}
		},
		submitForm() {
			this.validateForm();

			if (this.formIsValid) {
				const formData = {
					firstName: this.firstName.val,
					lastName: this.lastName.val,
					email: this.email.val,
					rate: this.rate,
					desc: this.description.val,
					areas: this.areas.val,
				};

				this.firstName.val = '';
				this.lastName.val = '';
				this.email.val = '';
				this.rate = 25;
				this.description.val = '';
				this.areas.val = [];

				this.$emit('save-data', formData);
			} else {
				return;
			}
		},
	},
};
</script>

<style>
form {
	max-width: 600px;
	margin: auto;
	border: 1px solid rgba(147, 147, 147, 0.2);
	border-radius: 10px;
	box-shadow: 3px 3px 10px 3px rgba(147, 147, 147, 0.2);
	padding: 20px 30px;
}

.form-control {
	margin: 2rem 0;
}

.form-control p {
	color: red;
	font-size: 0.7rem;
}

select {
	height: 30px;
	width: 50px;
}

label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input[type='text'],
input[type='number'],
input[type='email'] {
	height: 35px;
}

input[type='checkbox'] + label {
	font-weight: normal;
	display: inline;
	margin: 0 0 1rem 0.5rem !important;
}

input,
textarea {
	display: block;
	width: 100%;
	border: 1px solid #ccc;
	font: inherit;
}

input:focus,
textarea:focus {
	background-color: #f0e6fd;
	outline: none;
	border-color: #3d008d;
}

input[type='checkbox'] {
	display: inline;
	width: auto;
	border: none;
}

input[type='checkbox']:checked {
	border: none;
	outline: none;
}

input[type='checkbox']:focus {
	outline: #3d008d solid 1px;
}

h3 {
	margin: 0.5rem 0;
	font-size: 1rem;
}

.invalid label {
	color: red;
}

.invalid input,
.invalid textarea {
	border: 1px solid red;
}
</style>