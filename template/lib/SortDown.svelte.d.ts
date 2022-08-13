/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SortDownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SortDown extends SvelteComponentTyped<
  SortDownProps,
  {},
  { default: {} }
> {}
