/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CurrencyExchangeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CurrencyExchange extends SvelteComponentTyped<
  CurrencyExchangeProps,
  {},
  { default: {} }
> {}
