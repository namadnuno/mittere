<script>
  import StatsCard from "../_components/StatsCard.svelte";
  import DashboardLatest from "../_components/DashboardLatest.svelte";
  import auth from "auth.js";
  let user = auth().user;
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<StatsCard />
<DashboardLatest />
