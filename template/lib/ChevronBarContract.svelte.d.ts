/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronBarContractProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronBarContract extends SvelteComponentTyped<
  ChevronBarContractProps,
  {},
  { default: {} }
> {}
