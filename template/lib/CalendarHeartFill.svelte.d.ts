/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarHeartFill extends SvelteComponentTyped<
  CalendarHeartFillProps,
  {},
  { default: {} }
> {}
