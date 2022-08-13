/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarMonthProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarMonth extends SvelteComponentTyped<
  CalendarMonthProps,
  {},
  { default: {} }
> {}
