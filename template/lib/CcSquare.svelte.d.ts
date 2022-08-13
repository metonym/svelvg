/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CcSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CcSquare extends SvelteComponentTyped<
  CcSquareProps,
  {},
  { default: {} }
> {}
