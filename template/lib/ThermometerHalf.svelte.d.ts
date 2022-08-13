/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThermometerHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ThermometerHalf extends SvelteComponentTyped<
  ThermometerHalfProps,
  {},
  { default: {} }
> {}
