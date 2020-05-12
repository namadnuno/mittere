<script>
  import { onMount } from "svelte";
  import { stats, loading, getStats } from "../../stores/stats";
  import Money from "../../components/Money.svelte";

  onMount(() => {
    getStats();
  });
</script>

{#if !$loading}
  <div class="card success mt-10">
    <div class="flex justify-between">
      <div class="stats">
        <div class="mb-0">
          <h4 class="card-title-xs">spent this month</h4>
          <h3 class="text-white text-3xl font-title font-bold">
            <Money value={$stats.spent} />
          </h3>
        </div>
      </div>
    </div>
  </div>
{/if}
