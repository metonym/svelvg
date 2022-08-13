/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShiftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Shift extends SvelteComponentTyped<
  ShiftProps,
  {},
  { default: {} }
> {}
