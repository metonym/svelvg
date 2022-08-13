/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronDownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronDown extends SvelteComponentTyped<
  ChevronDownProps,
  {},
  { default: {} }
> {}
