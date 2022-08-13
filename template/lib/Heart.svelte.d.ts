/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Heart extends SvelteComponentTyped<
  HeartProps,
  {},
  { default: {} }
> {}
