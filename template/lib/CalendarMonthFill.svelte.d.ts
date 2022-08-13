/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarMonthFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarMonthFill extends SvelteComponentTyped<
  CalendarMonthFillProps,
  {},
  { default: {} }
> {}
