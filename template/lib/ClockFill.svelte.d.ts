/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClockFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ClockFill extends SvelteComponentTyped<
  ClockFillProps,
  {},
  { default: {} }
> {}
