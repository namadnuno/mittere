import { goto } from '@sapper/app';
import { writable } from 'svelte/store';
import { post } from 'utils.js';
import { session } from '../stores/stores';

let loading = writable(false);
let errors = writable(null);

const loginUser = (user) => {
  session.user = user;
};

const login = async (formData) => {
  loading.set(true);
  const response = await post('/auth/login', formData);
  loading.set(false);

  if (response.status > 400) {
    errors.set({ message: 'Could not connect to the api' });
    return;
  }
  console.log(response)
  loginUser(response.data);
  goto('/dashboard');
};

export { errors, loading, login };
