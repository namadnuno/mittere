import { writable } from 'svelte/store';
import * as api from 'api.js';

let orders = writable(null);
let loading = writable(true);
let errors = writable(null);



const getOrders = async (id) => {
  loading.set(true);
  const response = await api.get('orders');
  if (response.errors) {
    loading.set(false);
    errors.set(response.errors);
    return;
  }
  orders.set(response.data);
  loading.set(false);
};


export {loading, getOrders, orders };
