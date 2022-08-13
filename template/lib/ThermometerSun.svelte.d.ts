/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThermometerSunProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ThermometerSun extends SvelteComponentTyped<
  ThermometerSunProps,
  {},
  { default: {} }
> {}
