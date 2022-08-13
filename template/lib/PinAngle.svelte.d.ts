/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PinAngleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PinAngle extends SvelteComponentTyped<
  PinAngleProps,
  {},
  { default: {} }
> {}
