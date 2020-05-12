<script>
  import { onMount } from "svelte";
  import { stats, loading, getStats } from "../../stores/stats";
  import Money from "../../components/Money.svelte";
  import StatsLatestOrders from "./StatsLatestOrders.svelte";

  onMount(() => {
    getStats();
  });
</script>

<style>
  .overview-bg {
    background-image: url(/bg/dashboard-bg.svg);
    background-position: center;
    background-size: cover;
  }
</style>

<header class="overview-bg h-header w-full">
  <div class="content">
    <h1 class="page-title pt-10">Overview</h1>
    {#if !$loading}
      <div class="card default mt-10">
        <div class="flex justify-between">
          <div class="stats">
            <div class="card-stat">
              <h4 class="card-title-xs">spent this month</h4>
              <h3 class="card-value">
                <Money value={$stats.spent} />
              </h3>
            </div>
            <div class="card-stat mb-0">
              <h4 class="card-title-xs">Monthly goal</h4>
              <h3 class="card-value">
                <Money value={$stats.goal} />
              </h3>
            </div>
          </div>
          <StatsLatestOrders />
        </div>
      </div>
    {/if}
  </div>
</header>
