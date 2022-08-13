/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PuzzleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PuzzleFill extends SvelteComponentTyped<
  PuzzleFillProps,
  {},
  { default: {} }
> {}
