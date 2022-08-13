/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Calendar2DayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Calendar2Day extends SvelteComponentTyped<
  Calendar2DayProps,
  {},
  { default: {} }
> {}
