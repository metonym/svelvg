/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FunnelProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Funnel extends SvelteComponentTyped<
  FunnelProps,
  {},
  { default: {} }
> {}
