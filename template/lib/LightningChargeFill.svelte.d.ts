/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightningChargeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LightningChargeFill extends SvelteComponentTyped<
  LightningChargeFillProps,
  {},
  { default: {} }
> {}
