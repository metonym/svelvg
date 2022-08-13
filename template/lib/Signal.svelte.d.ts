/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SignalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Signal extends SvelteComponentTyped<
  SignalProps,
  {},
  { default: {} }
> {}
