/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CircleHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CircleHalf extends SvelteComponentTyped<
  CircleHalfProps,
  {},
  { default: {} }
> {}
