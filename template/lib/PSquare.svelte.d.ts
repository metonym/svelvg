/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PSquare extends SvelteComponentTyped<
  PSquareProps,
  {},
  { default: {} }
> {}
