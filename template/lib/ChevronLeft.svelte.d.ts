/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronLeftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronLeft extends SvelteComponentTyped<
  ChevronLeftProps,
  {},
  { default: {} }
> {}
