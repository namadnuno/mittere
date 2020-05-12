<script>
  import { getOrder, order, loading } from "../../../../stores/order";
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";
  import Money from "../../../../components/Money.svelte";
  import CardValue from "../../../_components/CardValue.svelte";
  import Edit from '../../../_components/EditButton.svelte';
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
    {#if !$loading}
      <div class="mt-10 mb-10">
        <h2 class="page-title">Order nº {$order.orderId}</h2>
      </div>
      <div class="image-caption w-full">
        <img
          class="w-full"
          src={$order.product_image}
          alt={$order.product_name} />
      </div>
      <div class="card mt-8 success">
        <h4 class="card-title-xs mb-3">Price</h4>
        <h4 class="card-title card-value text-white">
          <Money value={$order.price} />
        </h4>
      </div>

      <div class="card white mt-8 default">
        <div class="flex justify-between">
          <h4 class="card-title-mf mb-3">Information</h4>
          <Edit href={`/dashboard/orders/${$order._id}/edit`} classes="ml-3"></Edit>
        </div>
        <div class="flex flex-wrap">
          <CardValue classes="w-1/2" label="Order nº" value={$order.orderId} />
          <CardValue classes="w-1/2" label="Tracking ID" value={$order.shipping_tracker} />
          <CardValue classes="w-full" label="Recipient" value={$order.recipient} />
          <CardValue classes="w-full" label="Shop" value={$order.shop} />
          <CardValue classes="w-full truncate" label="Product URL" value={$order.shop_url} />
          <CardValue classes="w-full" label="Status" valueClasses="badge" value={$order.status} />
        </div>
      </div>
    {/if}
  </div>
</section>
