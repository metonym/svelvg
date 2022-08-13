/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PuzzleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Puzzle extends SvelteComponentTyped<
  PuzzleProps,
  {},
  { default: {} }
> {}
