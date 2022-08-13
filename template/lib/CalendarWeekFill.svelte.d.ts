/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarWeekFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarWeekFill extends SvelteComponentTyped<
  CalendarWeekFillProps,
  {},
  { default: {} }
> {}
