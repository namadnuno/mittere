<script>
  import MonthSpentCard from '../../_components/MonthSpentCard.svelte'
  import OrdersList from '../../_components/OrdersList.svelte'
</script>

<svelte:head>
    <title>My Orders</title>
</svelte:head>

<section>
  <div class="content">
      <div class="mt-10 mb-10">
        <h2 class="page-title">My Orders</h2>
      </div>
      <MonthSpentCard />
      <OrdersList />
  </div>
</section>
