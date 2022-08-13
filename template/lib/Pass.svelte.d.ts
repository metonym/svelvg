/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PassProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pass extends SvelteComponentTyped<
  PassProps,
  {},
  { default: {} }
> {}
