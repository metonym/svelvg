/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PinAngleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PinAngleFill extends SvelteComponentTyped<
  PinAngleFillProps,
  {},
  { default: {} }
> {}
