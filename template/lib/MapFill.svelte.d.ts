/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MapFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MapFill extends SvelteComponentTyped<
  MapFillProps,
  {},
  { default: {} }
> {}
