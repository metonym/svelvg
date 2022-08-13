/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CpuFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CpuFill extends SvelteComponentTyped<
  CpuFillProps,
  {},
  { default: {} }
> {}
