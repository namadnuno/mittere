<script>
  import Field from "../../components/Field.svelte";
  import DateField from "../../components/DateField.svelte";
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let form;
  export let errors;
  export let loading;
</script>
<form on:submit|preventDefault={() => dispatch('submit')}>
      <Field
        name="orderId"
        label="Order nº"
        bind:value={form.orderId}
        errors={errors} />
      <Field name="shop" label="Shop" bind:value={form.shop} errors={errors} />
      <Field
        name="product_name"
        label="Product Name"
        bind:value={form.product_name}
        errors={errors} />
      <Field
        name="shop_url"
        label="Product URL"
        bind:value={form.shop_url}
        errors={errors} />
      <Field
        name="price"
        label="Price"
        bind:value={form.price}
        errors={errors} />
      <Field
        name="recipient"
        label="Recipient"
        bind:value={form.recipient}
        errors={errors} />
      <Field
        type="select"
        options={['processing', 'pending', 'waiting for payment', 'shipped', 'delivered', 'confirmed']}
        name="status"
        label="Status"
        bind:value={form.status}
        errors={errors} />
      {#if form.status == 'shipped' || form.status == 'delivered'}
        <Field
          name="shipping_tracker"
          label="Tracking code"
          bind:value={form.shipping_tracker}
          errors={errors} />
      {/if}
      <DateField
        name="orderedAt"
        label="orderedAt"
        bind:value={form.orderedAt}
        errors={errors} />
      <div class="mt-4 flex justify-between">
        <a href="/dashboard/" class="button default">Cancel</a>
        <button
          type="submit"
          class={loading ? 'button loading' : 'button success'}
          disabled={loading}>
          Save
        </button>
      </div>
    </form>