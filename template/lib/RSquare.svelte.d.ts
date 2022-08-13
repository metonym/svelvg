/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RSquare extends SvelteComponentTyped<
  RSquareProps,
  {},
  { default: {} }
> {}
