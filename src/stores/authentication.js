import { goto } from '@sapper/app';
import { writable } from 'svelte/store';
import { post } from 'utils.js';
import { session } from '../stores/stores';

let loading = writable(false);
let errors = writable(null);

const setErrors = (errs) => errors.set(errs);

const loginUser = (user) => {
	session.user = user;
};

const login = async (formData) => {
	loading.set(true);
	const response = await post('/auth/login', formData);
	loginUser(response.data);
	if (response.error) {
		setErrors(response.error);
		return;
	}
	loading.set(false);
	goto('/dashboard');
};

export { errors, loading, login };
