/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronContractProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronContract extends SvelteComponentTyped<
  ChevronContractProps,
  {},
  { default: {} }
> {}
