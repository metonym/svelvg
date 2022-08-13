/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronBarUpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronBarUp extends SvelteComponentTyped<
  ChevronBarUpProps,
  {},
  { default: {} }
> {}
