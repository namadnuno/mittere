<script>
  import { saving, save, errors, success } from "../../stores/order.js";
  import Field from "../../components/Field.svelte";
  import Alert from "./Alert.svelte";
  import DateField from "../../components/DateField.svelte";
  import format from "date-fns/format";
  let form = {
    orderId: "",
    shop: "",
    status: "processing",
    product_name: "",
    recipient: "",
    shop_url: "",
    shipping_tracker: "",
    price: 0,
    orderedAt: format(Date.now(), "yyyy-MM-dd")
  };

  const handleSubmit = () => {
    save(form);
  };
</script>

  <section class="">
    {#if $success}
      <Alert message={$success} />
    {/if}
    <form on:submit|preventDefault={handleSubmit}>
      <Field
        name="orderId"
        label="Order nº"
        bind:value={form.orderId}
        errors={$errors} />
      <Field name="shop" label="Shop" bind:value={form.shop} errors={$errors} />
      <Field
        name="product_name"
        label="Product Name"
        bind:value={form.product_name}
        errors={$errors} />
      <Field
        name="shop_url"
        label="Product URL"
        bind:value={form.shop_url}
        errors={$errors} />
      <Field
        name="recipient"
        label="Recipient"
        bind:value={form.recipient}
        errors={$errors} />
      <Field
        type="select"
        options={['processing', 'pending', 'waiting for payment', 'shipped', 'delivered', 'confirmed']}
        name="status"
        label="Status"
        bind:value={form.status}
        errors={$errors} />
      {#if form.status == 'shipped' || form.status == 'delivered'}
        <Field
          name="shipping_tracker"
          label="Tracking code"
          bind:value={form.shipping_tracker}
          errors={$errors} />
      {/if}
      <DateField
        name="orderedAt"
        label="orderedAt"
        bind:value={form.orderedAt}
        errors={$errors} />
      <div class="mt-4 flex justify-between">
        <a href="/dashboard/" class="button default">Cancel</a>
        {$saving}
        <button
          type="submit"
          class={$saving ? 'button loading' : 'button success'}
          disabled={$saving}>
          Save
        </button>
      </div>
    </form>
  </section>