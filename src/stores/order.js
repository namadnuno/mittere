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
  if (response.status >= 400) {
    saving.set(false);
    errors.set(response.data.errors);
    return;
  }
  success.set(response.data.message);
  order.set(response.data.data);
  addOrderToLoaded(response.data.data);

  setTimeout(() => {
    saving.set(false);
    goto('/dashboard/orders/' + response.data.data._id);
  }, 2000);
};

const updateLoaded = (order) => {
  ordersLoaded.update(
    orders => {
      let index = orders.findIndex(o => o._id == order._id);

      if (index > -1) {
        orders.splice(index, 1);
      }

      addOrderToLoaded(order);
    }
  );
}

const addOrderToLoaded = (order) => {
  ordersLoaded.update(
    (orders) =>
    (orders = [...orders, { ...order, loadedAt: Date.now() }])
  );
}

const update = async (form) => {
  saving.set(true);
  const response = await api.put('orders/' + form._id, form);
  errors.set(null);

  if (response.status >= 400) {
    saving.set(false);
    errors.set(response.errors);
    return;
  }

  success.set(response.data.message);
  order.set(response.data.data);
  updateLoaded(response.data.data);

  setTimeout(() => {
    saving.set(false);
    goto('/dashboard/orders/' + response.data.data._id);
  }, 2000);
};

const loadOrder = async (id) => {
  loading.set(true);
  const response = await api.get('orders/' + id);
  
  if (response.status >= 400) {
    loading.set(false);
    errors.set(response.errors);
    return;
  }

  order.set(response.data);
  loading.set(false);
};

const getOrder = (id) => {
  let _order;
  ordersLoaded.subscribe(
    (orders) => {
      if (orders) {
        _order = orders.find((o) => o._id == id)
      }
    }
  );
  if (!_order || !canLoad(_order.loadedAt)) {
    return loadOrder(id);
  }

  order.set(_order);
};

const remove = async (id) => {
  loading.set(true);
  await api.del('orders/' + id);
  loading.set(false);
}

const reset = () => {
  loading.set(true);
  // ordersLoaded.set([]);
}

export { saving, errors, loading, save, success, getOrder, order, remove, update,reset };
