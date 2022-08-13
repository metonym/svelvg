/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarDayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarDay extends SvelteComponentTyped<
  CalendarDayProps,
  {},
  { default: {} }
> {}
