/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PinProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pin extends SvelteComponentTyped<
  PinProps,
  {},
  { default: {} }
> {}
