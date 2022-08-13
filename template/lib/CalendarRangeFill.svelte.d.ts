/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarRangeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarRangeFill extends SvelteComponentTyped<
  CalendarRangeFillProps,
  {},
  { default: {} }
> {}
