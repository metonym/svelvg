/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronBarExpandProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronBarExpand extends SvelteComponentTyped<
  ChevronBarExpandProps,
  {},
  { default: {} }
> {}
