/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelephoneInboundProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TelephoneInbound extends SvelteComponentTyped<
  TelephoneInboundProps,
  {},
  { default: {} }
> {}
