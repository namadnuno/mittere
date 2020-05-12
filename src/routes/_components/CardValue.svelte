<script>
  export let value;
  export let label;
  export let classes = '';
  export let labelClasses = 'text-gray-500 text-lg';
  export let valueClasses = '';
</script>

<style>
.badge {
  @apply p-1 bg-teal-500 text-xs text-white font-bold inline-block rounded;
}
</style>

<div class={classes + " mb-4"}>
  <div class={labelClasses}>{label}</div>
  <div class={valueClasses}>{value}</div>
</div>
