/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BarChartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BarChart extends SvelteComponentTyped<
  BarChartProps,
  {},
  { default: {} }
> {}
