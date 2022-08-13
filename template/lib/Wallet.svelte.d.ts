/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WalletProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Wallet extends SvelteComponentTyped<
  WalletProps,
  {},
  { default: {} }
> {}
