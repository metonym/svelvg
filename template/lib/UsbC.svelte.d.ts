/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UsbCProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UsbC extends SvelteComponentTyped<
  UsbCProps,
  {},
  { default: {} }
> {}
