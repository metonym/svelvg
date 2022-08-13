/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeSassProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeSass extends SvelteComponentTyped<
  FiletypeSassProps,
  {},
  { default: {} }
> {}
