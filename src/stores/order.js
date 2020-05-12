import { writable } from 'svelte/store';
import * as api from 'api.js';
import { goto } from '@sapper/app';
import differenceInMinutes from 'date-fns/differenceInMinutes';

let order = writable(null);
let loading = writable(true);
let errors = writable(null);
let success = writable(null);
let saving = writable(false);
let ordersLoaded = writable([]);

let canLoad = (time) => {
  return differenceInMinutes(time, Date.now()) > 1;
};

const save = async (form) => {
  saving.set(true);
  const response = await api.post('orders', form);
  errors.set(null);
  if (response.errors) {
    saving.set(false);
    errors.set(response.errors);
    return;
  }

  success.set(response.message);
  order.set(response.data);
  ordersLoaded.update(
    (orders) =>
      (orders = [...orders, { ...response.data, loadedAt: Date.now() }])
  );

  setTimeout(() => {
    saving.set(false);
    goto('/dashboard/orders/' + response.data._id);
  }, 2000);
};

const loadOrder = async (id) => {
  loading.set(true);
  const response = await api.get('orders/' + id);
  if (response.errors) {
    loading.set(false);
    errors.set(response.errors);
    return;
  }
  console.log(response);
  order.set(response);
  loading.set(false);
};

const getOrder = (id) => {
  let _order;
  ordersLoaded.subscribe(
    (orders) => (_order = orders.find((o) => o._id == id))
  );
  if (!_order || !canLoad(_order.loadedAt)) {
    return loadOrder(id);
  }

  order.set(_order);
};

export { saving, errors, loading, save, success, getOrder, order };
