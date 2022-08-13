/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilterSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilterSquareFill extends SvelteComponentTyped<
  FilterSquareFillProps,
  {},
  { default: {} }
> {}
