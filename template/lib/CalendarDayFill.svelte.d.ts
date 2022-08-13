/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarDayFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarDayFill extends SvelteComponentTyped<
  CalendarDayFillProps,
  {},
  { default: {} }
> {}
