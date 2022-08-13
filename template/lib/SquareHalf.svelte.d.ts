/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SquareHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SquareHalf extends SvelteComponentTyped<
  SquareHalfProps,
  {},
  { default: {} }
> {}
