/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BrowserEdgeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BrowserEdge extends SvelteComponentTyped<
  BrowserEdgeProps,
  {},
  { default: {} }
> {}
