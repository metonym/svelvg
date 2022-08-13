/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WaterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Water extends SvelteComponentTyped<
  WaterProps,
  {},
  { default: {} }
> {}
