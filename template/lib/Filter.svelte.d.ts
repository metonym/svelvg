/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Filter extends SvelteComponentTyped<
  FilterProps,
  {},
  { default: {} }
> {}
