/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilterCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilterCircle extends SvelteComponentTyped<
  FilterCircleProps,
  {},
  { default: {} }
> {}
