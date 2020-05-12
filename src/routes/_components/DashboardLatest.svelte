<script>
  import { loading, orders, getLatest } from "../../stores/latests";
  import NoOrdersPanel from './NoOrdersPanel.svelte';
  import { onMount } from "svelte";

  onMount(() => {
    getLatest();
  });
</script>

<section class="mt-24 content">
  <h4 class="page-title">Latest orders</h4>
  {#if !$loading}
    {#if $orders.length > 0}
      {#each $orders as order}
        <div class="slide-content">{order.product_name}</div>
      {/each}
    {:else}
      <NoOrdersPanel></NoOrdersPanel>
    {/if}
  {/if}
</section>
