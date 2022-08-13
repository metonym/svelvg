/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BarChartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BarChartFill extends SvelteComponentTyped<
  BarChartFillProps,
  {},
  { default: {} }
> {}
