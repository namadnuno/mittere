<script>
  import { getOrders, orders, loading } from "../../stores/orders";
  import Money from "../../components/Money.svelte";
  import NoOrdersPanel from './NoOrdersPanel.svelte';
  import OrderItem from './OrderItem.svelte'
  import { onMount } from "svelte";

  onMount(() => {
    getOrders();
  });
</script>

{#if !$loading}
  {#each $orders as order}
    <OrderItem order={order} />
  {:else}
    <NoOrdersPanel />
  {/each}
{/if}