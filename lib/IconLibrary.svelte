<script>
  export let pkg = {
    name: "",
  };

  export let icons = {};

  let value = "";

  $: entries = Object.entries(icons);
  $: filtered =
    value.trim().length > 0
      ? entries.filter(([icon]) =>
          icon
            .toLowerCase()
            .includes(value.toLowerCase().replace(/(\s+|-)/, ""))
        )
      : entries;
</script>

<svelte:head>
  <title>{pkg.name}</title>
</svelte:head>

<main>
  <h1>
    {pkg.name}
  </h1>

  <input type="search" placeholder="Search icons..." bind:value />

  <div>
    Showing {filtered.length} of {entries.length} total
  </div>

  <ul>
    {#each filtered as [icon, component] (icon)}
      <li>
        <div>{icon}</div>
        <svelte:component this={component} />
      </li>
    {/each}
  </ul>
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: sans-serif;
    overflow-y: scroll;
    font-size: 0.875rem;
    letter-spacing: 0.01rem;
  }

  main > * {
    padding: 1rem 2rem;
  }

  input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #ddd;
    border-radius: 0;
    font: inherit;
  }

  input:focus {
    outline: 0;
    border-bottom-color: #ccc;
  }

  main {
    max-width: 1480px;
    margin: 2rem auto;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 2rem;
    border-bottom: 1px solid #ddd;
  }

  li div {
    margin-bottom: 0.75rem;
  }
</style>
