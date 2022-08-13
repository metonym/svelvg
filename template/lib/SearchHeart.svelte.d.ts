/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SearchHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SearchHeart extends SvelteComponentTyped<
  SearchHeartProps,
  {},
  { default: {} }
> {}
