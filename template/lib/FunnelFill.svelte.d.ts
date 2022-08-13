/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FunnelFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FunnelFill extends SvelteComponentTyped<
  FunnelFillProps,
  {},
  { default: {} }
> {}
