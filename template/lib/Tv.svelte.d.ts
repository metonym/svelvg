/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TvProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tv extends SvelteComponentTyped<
  TvProps,
  {},
  { default: {} }
> {}
