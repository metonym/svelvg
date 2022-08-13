/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CurrencyBitcoinProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CurrencyBitcoin extends SvelteComponentTyped<
  CurrencyBitcoinProps,
  {},
  { default: {} }
> {}
