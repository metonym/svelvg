/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BandaidFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BandaidFill extends SvelteComponentTyped<
  BandaidFillProps,
  {},
  { default: {} }
> {}
