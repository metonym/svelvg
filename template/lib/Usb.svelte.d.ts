/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UsbProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Usb extends SvelteComponentTyped<
  UsbProps,
  {},
  { default: {} }
> {}
