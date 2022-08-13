/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CurrencyDollarProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CurrencyDollar extends SvelteComponentTyped<
  CurrencyDollarProps,
  {},
  { default: {} }
> {}
