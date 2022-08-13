/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EraserProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Eraser extends SvelteComponentTyped<
  EraserProps,
  {},
  { default: {} }
> {}
