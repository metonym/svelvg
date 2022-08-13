/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Square extends SvelteComponentTyped<
  SquareProps,
  {},
  { default: {} }
> {}
