/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightningFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LightningFill extends SvelteComponentTyped<
  LightningFillProps,
  {},
  { default: {} }
> {}
