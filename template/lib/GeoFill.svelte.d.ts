/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GeoFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GeoFill extends SvelteComponentTyped<
  GeoFillProps,
  {},
  { default: {} }
> {}
