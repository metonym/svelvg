/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FuelPumpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FuelPump extends SvelteComponentTyped<
  FuelPumpProps,
  {},
  { default: {} }
> {}
