/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GeoAltProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GeoAlt extends SvelteComponentTyped<
  GeoAltProps,
  {},
  { default: {} }
> {}
