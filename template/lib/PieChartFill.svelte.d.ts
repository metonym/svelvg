/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PieChartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PieChartFill extends SvelteComponentTyped<
  PieChartFillProps,
  {},
  { default: {} }
> {}
