/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BrushFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BrushFill extends SvelteComponentTyped<
  BrushFillProps,
  {},
  { default: {} }
> {}
