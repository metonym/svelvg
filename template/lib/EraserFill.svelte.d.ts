/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EraserFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EraserFill extends SvelteComponentTyped<
  EraserFillProps,
  {},
  { default: {} }
> {}
