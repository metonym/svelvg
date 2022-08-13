/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HeartHalf extends SvelteComponentTyped<
  HeartHalfProps,
  {},
  { default: {} }
> {}
