/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayersHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayersHalf extends SvelteComponentTyped<
  LayersHalfProps,
  {},
  { default: {} }
> {}
