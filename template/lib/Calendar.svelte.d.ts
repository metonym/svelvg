/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CalendarProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Calendar extends SvelteComponentTyped<
  CalendarProps,
  {},
  { default: {} }
> {}
