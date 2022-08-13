/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayersProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Layers extends SvelteComponentTyped<
  LayersProps,
  {},
  { default: {} }
> {}
