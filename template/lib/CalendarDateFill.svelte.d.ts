/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarDateFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarDateFill extends SvelteComponentTyped<
  CalendarDateFillProps,
  {},
  { default: {} }
> {}
