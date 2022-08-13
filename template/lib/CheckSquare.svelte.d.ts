/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CheckSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CheckSquare extends SvelteComponentTyped<
  CheckSquareProps,
  {},
  { default: {} }
> {}
