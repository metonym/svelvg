/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PieChartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PieChart extends SvelteComponentTyped<
  PieChartProps,
  {},
  { default: {} }
> {}
