/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ThermometerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Thermometer extends SvelteComponentTyped<
  ThermometerProps,
  {},
  { default: {} }
> {}
