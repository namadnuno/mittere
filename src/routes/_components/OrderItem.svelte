<script>
  import { remove } from '../../stores/order';
  import { getOrders } from '../../stores/orders';
  import Money from "../../components/Money.svelte";
  import Edit from "./EditButton.svelte";
  import Trash from "./TrashButton.svelte";
  export let order;

  const removeOrder = async () => {
    await remove(order._id)
    await getOrders()
  }
</script>

<div class="card white mt-6">
  <div class="flex justify-between items-center">
    {#if order.product_image }
      <a href={"/dashboard/orders/" + order._id} class="w-1/4 block">
        <img src={order.product_image} alt={order.product_name} />
      </a>
    {/if}
    <div class="w-2/4 px-3">
      <a href={"/dashboard/orders/" + order._id}>
        <h4 class="text-lg font-title truncate">{order.product_name}</h4>
      </a>
      <h5 class="text-2xl font-title">
        <Money value={order.price} />
      </h5>
      <span class="block mt-3 text-green-500 font-bold">{order.status}</span>
    </div>
    <div class="w-1/4 px-3 flex justify-end text-right">
      <Trash on:press={removeOrder}></Trash>
      <Edit href={`/dashboard/orders/${order._id}/edit`} classes="ml-3"></Edit>
    </div> 
  </div>
</div>