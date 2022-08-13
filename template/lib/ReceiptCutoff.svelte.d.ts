/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ReceiptCutoffProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ReceiptCutoff extends SvelteComponentTyped<
  ReceiptCutoffProps,
  {},
  { default: {} }
> {}
