/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PinFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PinFill extends SvelteComponentTyped<
  PinFillProps,
  {},
  { default: {} }
> {}
