<script>
  import { saving, update, errors, success } from "../../stores/order.js";
  import Alert from "./Alert.svelte";
  import Form from './OrderForm.svelte';
  import format from "date-fns/format";
  export let order;

  let form = {
    ...order,
    orderedAt: format(new Date(order.orderedAt), "yyyy-MM-dd")
  };

  const handleSubmit = () => {
    update(form);
  };
</script>

  <section class="">
    {#if $success}
      <div class="mb-4">
        <Alert message={$success} />
      </div>
    {/if}
    <Form bind:form={form} on:submit={handleSubmit} errors={$errors} loading={$saving} />
  </section>