<script>
  import { loading, orders, getLatest } from "../../stores/latests";
  import { onMount } from "svelte";
  onMount(() => {
    getLatest();
  });
</script>

{#if !$loading}
  <div class="latest-buys">
    {#each $orders as order}
      <a href={'/order/' + order._id}>
        <div class="rounded-full w-32 h-32 bg-gray" />
      </a>
    {:else}
      <h4 class="card-title-xs">Found {$orders.length} orders</h4>
    {/each}
  </div>
{/if}
