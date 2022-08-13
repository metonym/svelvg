/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShiftFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShiftFill extends SvelteComponentTyped<
  ShiftFillProps,
  {},
  { default: {} }
> {}
