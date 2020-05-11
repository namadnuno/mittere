<script>
  export let value;
  export let label;
  export let name;

  const handleInput = e => {
    // in here, you can switch on type and implement
    // whatever behaviour you need
    value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
  };
</script>

<div class="mb-4">
  <input
    type="date"
    placeholder={label}
    {name}
    class="input"
    bind:value
    on:input={handleInput} />
</div>
