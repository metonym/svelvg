/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GeoAltFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GeoAltFill extends SvelteComponentTyped<
  GeoAltFillProps,
  {},
  { default: {} }
> {}
