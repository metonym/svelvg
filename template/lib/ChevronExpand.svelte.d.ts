/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronExpandProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronExpand extends SvelteComponentTyped<
  ChevronExpandProps,
  {},
  { default: {} }
> {}
