/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThermometerHighProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ThermometerHigh extends SvelteComponentTyped<
  ThermometerHighProps,
  {},
  { default: {} }
> {}
