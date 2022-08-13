/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GraphDownArrowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GraphDownArrow extends SvelteComponentTyped<
  GraphDownArrowProps,
  {},
  { default: {} }
> {}
