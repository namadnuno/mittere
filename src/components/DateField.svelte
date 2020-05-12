<script>
  export let value;
  export let label;
  export let name;
  export let errors;

  const handleInput = e => {
    value = e.target.value;
  };

  $: classes = errors && errors[name] ? "input with-error" : "input";
</script>

<div class="mb-4">
  <input
    type="date"
    placeholder={label}
    {name}
    class={classes}
    bind:value
    on:input={handleInput} />
    {#if errors && errors[name]}
      <p class="text-red-500 text-xs italic mt-3">{errors[name].message}</p>
    {/if}
</div>
