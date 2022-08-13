/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BarChartStepsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BarChartSteps extends SvelteComponentTyped<
  BarChartStepsProps,
  {},
  { default: {} }
> {}
