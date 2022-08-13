/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SlidersProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Sliders extends SvelteComponentTyped<
  SlidersProps,
  {},
  { default: {} }
> {}
