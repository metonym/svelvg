/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StopwatchFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StopwatchFill extends SvelteComponentTyped<
  StopwatchFillProps,
  {},
  { default: {} }
> {}
