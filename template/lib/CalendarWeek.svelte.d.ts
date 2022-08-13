/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarWeekProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarWeek extends SvelteComponentTyped<
  CalendarWeekProps,
  {},
  { default: {} }
> {}
