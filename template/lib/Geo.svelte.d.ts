/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GeoProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Geo extends SvelteComponentTyped<
  GeoProps,
  {},
  { default: {} }
> {}
