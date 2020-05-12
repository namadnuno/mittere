<script>
  export let message;
  export let level;

  const classes = () => {
    console.log(level);
    if (level == "danger") {
      return "bg-red-100 border-t-4 border-red-500 text-red-900";
    }
    return "bg-teal-100 border-teal-500 text-teal-900";
  };
</script>

<div
  class={classes() + 'border-t-4 rounded-b px-4 py-3 shadow-md'}
  role="alert">
  <div class="flex">
    <div>
      <p class="font-bold">{message}</p>
    </div>
  </div>
</div>
