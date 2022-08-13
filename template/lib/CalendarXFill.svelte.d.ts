/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarXFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarXFill extends SvelteComponentTyped<
  CalendarXFillProps,
  {},
  { default: {} }
> {}
