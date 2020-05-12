<script>
  import { loading, orders, getLatest } from "../../stores/latests";
  import { onMount } from "svelte";
  onMount(() => {
    getLatest();
  });
</script>

{#if !$loading}
  <div class="flex items-center flex-col">
    {#each $orders as order}
      <a href={'/dashboard/orders/' + order._id} class="block -mt-4">
        <div class="bg-gray-100 rounded-full shadown-lg" >
          {#if order.product_image}
            <img src={order.product_image} class="w-40 rounded-full" alt={order.product_name}>
          {:else}
            {order.product_name[0].toUpperCase()}
          {/if}
        </div>
      </a>
    {:else}
      <h4 class="card-title-xs">Found {$orders.length} orders</h4>
    {/each}
    <a href={'/dashboard/orders/'} class="block -mt-4">
      <div class="bg-white rounded-full shadown-lg w-40 h-40 flex justify-center items-center" >
        ...
      </div>
    </a>
  </div>
{/if}
