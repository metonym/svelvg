/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UsbMiniProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UsbMini extends SvelteComponentTyped<
  UsbMiniProps,
  {},
  { default: {} }
> {}
