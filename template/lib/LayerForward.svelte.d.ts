/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayerForwardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayerForward extends SvelteComponentTyped<
  LayerForwardProps,
  {},
  { default: {} }
> {}
