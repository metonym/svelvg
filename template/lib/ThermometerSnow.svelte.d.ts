/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThermometerSnowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ThermometerSnow extends SvelteComponentTyped<
  ThermometerSnowProps,
  {},
  { default: {} }
> {}
