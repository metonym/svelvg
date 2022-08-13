/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FuelPumpFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FuelPumpFill extends SvelteComponentTyped<
  FuelPumpFillProps,
  {},
  { default: {} }
> {}
