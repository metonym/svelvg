/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShuffleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Shuffle extends SvelteComponentTyped<
  ShuffleProps,
  {},
  { default: {} }
> {}
