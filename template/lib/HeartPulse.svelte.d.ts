/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartPulseProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HeartPulse extends SvelteComponentTyped<
  HeartPulseProps,
  {},
  { default: {} }
> {}
