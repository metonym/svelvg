/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayerBackwardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayerBackward extends SvelteComponentTyped<
  LayerBackwardProps,
  {},
  { default: {} }
> {}
