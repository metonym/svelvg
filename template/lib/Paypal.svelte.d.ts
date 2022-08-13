/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaypalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Paypal extends SvelteComponentTyped<
  PaypalProps,
  {},
  { default: {} }
> {}
