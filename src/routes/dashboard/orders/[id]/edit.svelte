<script>
  import EditOrder from "../../../_components/EditOrder.svelte";
  import { getOrder, order, loading, reset } from "../../../../stores/order";
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  const { page } = stores();

  onMount(() => {
    reset();
    getOrder($page.params.id);
  });
</script>

<svelte:head>
  <title>Create Order</title>
</svelte:head>

<div class="content">
  <section>
    <div class="mt-10 mb-10">
      <h2 class="page-title">Edit order</h2>
    </div>
  </section>
  {#if !$loading}
    <EditOrder order={$order} />
  {/if}
</div>
