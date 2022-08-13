/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FastForwardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FastForward extends SvelteComponentTyped<
  FastForwardProps,
  {},
  { default: {} }
> {}
