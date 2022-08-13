/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BatteryProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Battery extends SvelteComponentTyped<
  BatteryProps,
  {},
  { default: {} }
> {}
