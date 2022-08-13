/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarFill extends SvelteComponentTyped<
  CalendarFillProps,
  {},
  { default: {} }
> {}
