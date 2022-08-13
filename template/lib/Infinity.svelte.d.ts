/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InfinityProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Infinity extends SvelteComponentTyped<
  InfinityProps,
  {},
  { default: {} }
> {}
