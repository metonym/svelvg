/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BarChartLineFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BarChartLineFill extends SvelteComponentTyped<
  BarChartLineFillProps,
  {},
  { default: {} }
> {}
