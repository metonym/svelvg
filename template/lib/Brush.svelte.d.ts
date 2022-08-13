/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BrushProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Brush extends SvelteComponentTyped<
  BrushProps,
  {},
  { default: {} }
> {}
