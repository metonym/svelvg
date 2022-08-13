/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarEventProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarEvent extends SvelteComponentTyped<
  CalendarEventProps,
  {},
  { default: {} }
> {}
