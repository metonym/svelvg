/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartPulseFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HeartPulseFill extends SvelteComponentTyped<
  HeartPulseFillProps,
  {},
  { default: {} }
> {}
