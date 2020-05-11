import { writable } from 'svelte/store';
import * as api from 'api.js';

let stats = writable(null);
let loading = writable(true);
let errors = writable(null);

const getStats = async () => {
	loading.set(true);
	const response = await api.get('stats');

	if (response.error) {
		errors.set(response.error);
		return;
	}
	stats.set(response);
	loading.set(false);
};

export { errors, loading, stats, getStats };
