/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagHeart extends SvelteComponentTyped<
  BagHeartProps,
  {},
  { default: {} }
> {}
