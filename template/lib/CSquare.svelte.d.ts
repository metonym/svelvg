/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CSquare extends SvelteComponentTyped<
  CSquareProps,
  {},
  { default: {} }
> {}
