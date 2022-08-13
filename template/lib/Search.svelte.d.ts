/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SearchProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Search extends SvelteComponentTyped<
  SearchProps,
  {},
  { default: {} }
> {}
