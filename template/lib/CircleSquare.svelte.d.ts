/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CircleSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CircleSquare extends SvelteComponentTyped<
  CircleSquareProps,
  {},
  { default: {} }
> {}
