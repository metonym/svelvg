/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GraphUpArrowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GraphUpArrow extends SvelteComponentTyped<
  GraphUpArrowProps,
  {},
  { default: {} }
> {}
