/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlusSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlusSquare extends SvelteComponentTyped<
  PlusSquareProps,
  {},
  { default: {} }
> {}
