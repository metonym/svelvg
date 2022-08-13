/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarDateProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarDate extends SvelteComponentTyped<
  CalendarDateProps,
  {},
  { default: {} }
> {}
