/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TruckFlatbedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TruckFlatbed extends SvelteComponentTyped<
  TruckFlatbedProps,
  {},
  { default: {} }
> {}
