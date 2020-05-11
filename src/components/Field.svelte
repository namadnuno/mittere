<script>
  export let value;
  export let label;
  export let name;
  export let options = [];
  export let type = "text";
  export let errors = {};
  $: classes = errors && errors[name] ? "input with-error" : "input";
  const handleInput = e => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
  };
</script>

<div class="mb-4">
  {#if type === 'password'}
    <input
      type="password"
      class={classes}
      placeholder={label}
      {name}
      bind:value
      on:input={handleInput} />
  {:else if type === 'select'}
    <select class={classes} {name} on:input={handleInput}>
      {#each options as option}
        <option value={option} selected={option == value}>{option}</option>
      {/each}
    </select>
  {:else}
    <input
      type="text"
      placeholder={label}
      {name}
      class={classes}
      bind:value
      on:input={handleInput} />
  {/if}
  {#if errors && errors[name]}
    <p class="text-red-500 text-xs italic mt-3">{errors[name].message}</p>
  {/if}
</div>
