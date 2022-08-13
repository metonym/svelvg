/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ClockProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Clock extends SvelteComponentTyped<
  ClockProps,
  {},
  { default: {} }
> {}
