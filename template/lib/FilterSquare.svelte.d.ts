/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilterSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilterSquare extends SvelteComponentTyped<
  FilterSquareProps,
  {},
  { default: {} }
> {}
