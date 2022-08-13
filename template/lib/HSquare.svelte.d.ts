/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HSquare extends SvelteComponentTyped<
  HSquareProps,
  {},
  { default: {} }
> {}
