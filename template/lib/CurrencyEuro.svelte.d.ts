/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CurrencyEuroProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CurrencyEuro extends SvelteComponentTyped<
  CurrencyEuroProps,
  {},
  { default: {} }
> {}
