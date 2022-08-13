/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PinMapProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PinMap extends SvelteComponentTyped<
  PinMapProps,
  {},
  { default: {} }
> {}
