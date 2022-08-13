/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BroadcastPinProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BroadcastPin extends SvelteComponentTyped<
  BroadcastPinProps,
  {},
  { default: {} }
> {}
