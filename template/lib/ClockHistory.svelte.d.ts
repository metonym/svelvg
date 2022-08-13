/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClockHistoryProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClockHistory extends SvelteComponentTyped<
  ClockHistoryProps,
  {},
  { default: {} }
> {}
