/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hash extends SvelteComponentTyped<
  HashProps,
  {},
  { default: {} }
> {}
