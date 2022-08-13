/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MapProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Map extends SvelteComponentTyped<
  MapProps,
  {},
  { default: {} }
> {}
