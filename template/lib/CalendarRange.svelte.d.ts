/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarRangeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarRange extends SvelteComponentTyped<
  CalendarRangeProps,
  {},
  { default: {} }
> {}
