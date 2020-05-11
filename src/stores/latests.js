import { writable } from 'svelte/store';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import * as api from 'api.js';

let orders = writable(null);
let loading = writable(true);
let errors = writable(null);
let loaded = writable(false);
let loadedAt = writable(null);

let canLoad = () => {
  let _loadedAt;
  loadedAt.subscribe((value) => (_loadedAt = value));
  if (_loadedAt == null) return true;
  return differenceInMinutes(_loadedAt, Date.now()) > 1;
};

const getLatest = async () => {
  if (!canLoad()) {
    return;
  }
  loading.set(true);

  const response = await api.get('orders');

  if (response.error) {
    errors.set(response.error);
    return;
  }

  orders.set(response);
  loaded.set(true);
  loadedAt.set(Date.now());
  loading.set(false);
};

export { errors, loading, orders, getLatest };
