<script>
  import { saving, save, errors, success } from "../../stores/order.js";
  import Alert from "./Alert.svelte";
  import Form from './OrderForm.svelte';
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
    <Form bind:form={form} on:submit={handleSubmit} errors={$errors} loading={$saving} />
  </section>