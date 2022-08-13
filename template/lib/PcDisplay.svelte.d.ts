/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PcDisplayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PcDisplay extends SvelteComponentTyped<
  PcDisplayProps,
  {},
  { default: {} }
> {}
