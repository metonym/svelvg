/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TruckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Truck extends SvelteComponentTyped<
  TruckProps,
  {},
  { default: {} }
> {}
