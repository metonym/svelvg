/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WalletFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WalletFill extends SvelteComponentTyped<
  WalletFillProps,
  {},
  { default: {} }
> {}
