/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StarProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Star extends SvelteComponentTyped<
  StarProps,
  {},
  { default: {} }
> {}
