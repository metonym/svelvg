/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BroadcastProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Broadcast extends SvelteComponentTyped<
  BroadcastProps,
  {},
  { default: {} }
> {}
