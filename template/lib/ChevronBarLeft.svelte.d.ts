/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronBarLeftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronBarLeft extends SvelteComponentTyped<
  ChevronBarLeftProps,
  {},
  { default: {} }
> {}
