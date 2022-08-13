/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThermometerLowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ThermometerLow extends SvelteComponentTyped<
  ThermometerLowProps,
  {},
  { default: {} }
> {}
