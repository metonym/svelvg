/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GpuCardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GpuCard extends SvelteComponentTyped<
  GpuCardProps,
  {},
  { default: {} }
> {}
