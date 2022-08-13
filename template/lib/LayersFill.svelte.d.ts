/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayersFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayersFill extends SvelteComponentTyped<
  LayersFillProps,
  {},
  { default: {} }
> {}
