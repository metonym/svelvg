/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PinMapFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PinMapFill extends SvelteComponentTyped<
  PinMapFillProps,
  {},
  { default: {} }
> {}
