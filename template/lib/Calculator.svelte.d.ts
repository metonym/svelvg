/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalculatorProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Calculator extends SvelteComponentTyped<
  CalculatorProps,
  {},
  { default: {} }
> {}
