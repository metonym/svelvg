/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BarChartLineProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BarChartLine extends SvelteComponentTyped<
  BarChartLineProps,
  {},
  { default: {} }
> {}
