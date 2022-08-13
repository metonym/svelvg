/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PrinterFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PrinterFill extends SvelteComponentTyped<
  PrinterFillProps,
  {},
  { default: {} }
> {}
