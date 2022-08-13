/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BatteryChargingProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BatteryCharging extends SvelteComponentTyped<
  BatteryChargingProps,
  {},
  { default: {} }
> {}
