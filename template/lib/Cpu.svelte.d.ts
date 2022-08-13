/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CpuProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cpu extends SvelteComponentTyped<
  CpuProps,
  {},
  { default: {} }
> {}
