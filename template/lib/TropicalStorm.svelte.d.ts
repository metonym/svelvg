/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TropicalStormProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TropicalStorm extends SvelteComponentTyped<
  TropicalStormProps,
  {},
  { default: {} }
> {}
