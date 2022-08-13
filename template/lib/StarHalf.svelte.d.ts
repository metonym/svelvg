/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StarHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StarHalf extends SvelteComponentTyped<
  StarHalfProps,
  {},
  { default: {} }
> {}
