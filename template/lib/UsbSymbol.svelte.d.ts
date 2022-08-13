/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UsbSymbolProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UsbSymbol extends SvelteComponentTyped<
  UsbSymbolProps,
  {},
  { default: {} }
> {}
