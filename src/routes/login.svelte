<script>
  import Field from "../components/Field.svelte";
  import LogoHeader from "../components/LogoHeader.svelte";
  import { errors, loading, login } from "../stores/authentication";
  import { post } from "utils.js";

  let email = "";
  let password = "";

  const handleSubmit = async () => {
    await login({ email, password });
  };
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<LogoHeader />
<section class="content">
  <pre>{($errors, $loading)}</pre>
  <h2 class="page-title">Enter to check out your orders</h2>
  <form on:submit|preventDefault={handleSubmit} action="/login" class="mt-8">
    <Field type="text" label="Email" name="email" bind:value={email} />
    <Field
      type="password"
      label="Password"
      name="password"
      bind:value={password} />
    <div class="text-right text-black">
      <a href="/register" class="font-bold text-gray-500">
        create your account here
      </a>
    </div>
    <div class="mt-8">
      <button type="submit" class="button success w-full block">Enter</button>
    </div>
  </form>
</section>
