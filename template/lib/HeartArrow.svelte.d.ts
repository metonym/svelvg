/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartArrowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HeartArrow extends SvelteComponentTyped<
  HeartArrowProps,
  {},
  { default: {} }
> {}
