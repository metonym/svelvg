<script lang="ts">
  import { SvelteComponent } from "svelte";
  import { ArrowThroughHeart, _123 as Icon_123 } from "../lib";
  import Alt from "../lib/Alt.svelte";

  let component: typeof SvelteComponent = Alt;
</script>

<ArrowThroughHeart width={20} height="20" />
<Alt style="fill: red" />
<Icon_123 />
<svelte:component this={component} />
