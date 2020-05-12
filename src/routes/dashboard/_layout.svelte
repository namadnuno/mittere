<script context="module">
  export function preload(page, { user }) {
    if (!user) {
      this.redirect(302, `/login`);
    }

    return { user };
  }
</script>

<script>
  import { stores } from "@sapper/app";
  import { session } from "../../stores/stores";
  import Tailwind from "../../components/Tailwind.svelte";
  import Nav from '../_components/Nav.svelte'
  session.init();
</script>

<main class="font-body">
  <Nav />
  <slot />
</main>
