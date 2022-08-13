/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SuitHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SuitHeart extends SvelteComponentTyped<
  SuitHeartProps,
  {},
  { default: {} }
> {}
