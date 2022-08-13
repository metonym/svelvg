/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarPlus extends SvelteComponentTyped<
  CalendarPlusProps,
  {},
  { default: {} }
> {}
