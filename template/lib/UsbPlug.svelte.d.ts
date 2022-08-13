/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UsbPlugProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UsbPlug extends SvelteComponentTyped<
  UsbPlugProps,
  {},
  { default: {} }
> {}
