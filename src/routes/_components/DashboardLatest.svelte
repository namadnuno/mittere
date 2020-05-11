<script>
  import { loading, orders, getLatest } from "../../stores/latests";
  import Carousel from "@beyonk/svelte-carousel";
  import { onMount } from "svelte";

  onMount(() => {
    getLatest();
  });
</script>

<section class="mt-24 content">
  <h4 class="page-title">Latest orders</h4>
  {#if !$loading}
    {#if $orders.length > 0}
      <Carousel>
        {#each $orders as order}
          <div class="slide-content">{order.product_name}</div>
        {/each}
      </Carousel>
    {:else}
      <div>
        <img src="/no-orders.svg" class="w-3/5 mx-auto my-4" alt="no-orders" />
        <div
          class=" mt-4 flex items-center bg-blue-500 text-white text-sm
          font-bold px-4 py-3"
          role="alert">
          <p>No orders found.</p>
        </div>
        <a href="/dashboard/orders/create" class="button success w-full mt-4">
          Create order
        </a>
      </div>
    {/if}
  {/if}
</section>
