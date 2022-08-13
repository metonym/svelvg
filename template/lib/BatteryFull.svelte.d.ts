/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BatteryFullProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BatteryFull extends SvelteComponentTyped<
  BatteryFullProps,
  {},
  { default: {} }
> {}
