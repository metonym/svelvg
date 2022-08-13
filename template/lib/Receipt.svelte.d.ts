/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ReceiptProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Receipt extends SvelteComponentTyped<
  ReceiptProps,
  {},
  { default: {} }
> {}
