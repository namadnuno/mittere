<script>
  import { getOrder, order, loading } from "../../../stores/order";
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
  const { page } = stores();

  onMount(() => {
    getOrder($page.params.id);
  });
</script>

<svelte:head>
  {#if !$loading}
    <title>Order nº {$order.orderId}</title>
  {:else}
    <title>Order nº</title>
  {/if}
</svelte:head>

<section>
  <div class="content">
    <section>
      <div class="mt-10 mb-10">
        {#if !$loading}
          <h2 class="page-title">Order nº {$order.orderId}</h2>
        {/if}
      </div>
    </section>
  </div>
</section>
