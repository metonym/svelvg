/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BatteryHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BatteryHalf extends SvelteComponentTyped<
  BatteryHalfProps,
  {},
  { default: {} }
> {}
