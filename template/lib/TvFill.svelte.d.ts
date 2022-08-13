/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TvFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TvFill extends SvelteComponentTyped<
  TvFillProps,
  {},
  { default: {} }
> {}
