/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalculatorFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalculatorFill extends SvelteComponentTyped<
  CalculatorFillProps,
  {},
  { default: {} }
> {}
