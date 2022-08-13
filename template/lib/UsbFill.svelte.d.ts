/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UsbFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UsbFill extends SvelteComponentTyped<
  UsbFillProps,
  {},
  { default: {} }
> {}
