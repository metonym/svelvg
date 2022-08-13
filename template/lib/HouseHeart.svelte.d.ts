/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HouseHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HouseHeart extends SvelteComponentTyped<
  HouseHeartProps,
  {},
  { default: {} }
> {}
