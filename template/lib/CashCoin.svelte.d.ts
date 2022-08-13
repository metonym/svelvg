/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CashCoinProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CashCoin extends SvelteComponentTyped<
  CashCoinProps,
  {},
  { default: {} }
> {}
