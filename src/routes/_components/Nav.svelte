<script>
  let open = false;
  const toggle = () => {
    console.log(open, 'here')
    open = !open
  }
</script>
<style>
  .burger {
    height: 32px;
    width: 38px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 20;
    margin-right: 2.5rem;
    margin-top: 2.5rem;
  }

  .burger .line {
    background: #484848;
    width: 100%;
    display: block;
    height: 4px;
    border-radius: 2px;
  }
</style>

<div class="absolute right-0 top-0">
  <button class="burger" type="button" on:click={toggle}>
    <span class="line" />
    <span class="line" />
    <span class="line" />
  </button>
</div>

<div class={open ? "bg-green-500 fixed w-full h-full z-30 flex flex-col items-center justify-center" : "invisible hidden"}>
    <button class="text-3xl mb-8 text-white" type="button" on:click={toggle}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.66113 2.16116L42 42.5" stroke="#fff" stroke-width="4"/>
        <path d="M1.66113 42.5L42 2.16116" stroke="#fff" stroke-width="4"/>
      </svg>
    </button>
    <ul class="flex flex-col items-center justify-center">
      <li class="mb-4">
        <a href="/dashboard" class="text-3xl font-title text-white">Overview</a>
      </li>
      <li class="mb-4">
        <a href="/dashboard/orders" class="text-3xl font-title text-white">My Orders</a>
      </li>
      <li class="mb-4">
        <a href="/dashboard/orders/create" class="text-3xl font-title text-white">Create Order</a>
      </li>
      <li class="mb-4">
        <a href="/dashboard/orders/preferences" class="text-3xl font-title text-white">Preferences</a>
      </li>
      <li class="mb-4">
        <button type="button" class="text-3xl font-title text-white">Logout</button>
      </li>
    </ul>
</div>