/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpeedometerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Speedometer extends SvelteComponentTyped<
  SpeedometerProps,
  {},
  { default: {} }
> {}
