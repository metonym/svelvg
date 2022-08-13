/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UsbMicroProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UsbMicro extends SvelteComponentTyped<
  UsbMicroProps,
  {},
  { default: {} }
> {}
