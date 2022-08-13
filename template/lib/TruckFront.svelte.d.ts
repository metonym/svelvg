/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TruckFrontProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TruckFront extends SvelteComponentTyped<
  TruckFrontProps,
  {},
  { default: {} }
> {}
