/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarEventFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarEventFill extends SvelteComponentTyped<
  CalendarEventFillProps,
  {},
  { default: {} }
> {}
