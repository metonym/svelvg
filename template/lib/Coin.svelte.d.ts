/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CoinProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Coin extends SvelteComponentTyped<
  CoinProps,
  {},
  { default: {} }
> {}
