/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CalendarHeart extends SvelteComponentTyped<
  CalendarHeartProps,
  {},
  { default: {} }
> {}
