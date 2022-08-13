/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarX extends SvelteComponentTyped<
  CalendarXProps,
  {},
  { default: {} }
> {}
