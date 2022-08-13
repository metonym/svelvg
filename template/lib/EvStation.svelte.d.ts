/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EvStationProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EvStation extends SvelteComponentTyped<
  EvStationProps,
  {},
  { default: {} }
> {}
