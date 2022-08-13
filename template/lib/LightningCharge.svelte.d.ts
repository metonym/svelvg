/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightningChargeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LightningCharge extends SvelteComponentTyped<
  LightningChargeProps,
  {},
  { default: {} }
> {}
