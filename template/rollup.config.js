import svelteReadme from "svelte-readme";

export default svelteReadme({
  style: `
    .code-fence > div {
      display: inline-flex;
      flex-direction: column;
      border: 1px solid #eaecef;
      border-radius: 4px;
      padding: 8px;
      margin: 4px;
      font-size: 0.75rem;
    }

    .code-fence svg {
      margin-bottom: 4px;
    }
  `,
});
