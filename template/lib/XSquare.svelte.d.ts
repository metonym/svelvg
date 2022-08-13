/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XSquare extends SvelteComponentTyped<
  XSquareProps,
  {},
  { default: {} }
> {}
