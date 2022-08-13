/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CodeSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CodeSquare extends SvelteComponentTyped<
  CodeSquareProps,
  {},
  { default: {} }
> {}
