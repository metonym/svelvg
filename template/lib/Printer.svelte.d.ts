/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PrinterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Printer extends SvelteComponentTyped<
  PrinterProps,
  {},
  { default: {} }
> {}
