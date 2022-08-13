/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MemoryProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Memory extends SvelteComponentTyped<
  MemoryProps,
  {},
  { default: {} }
> {}
