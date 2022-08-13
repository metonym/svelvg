/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChevronRightProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ChevronRight extends SvelteComponentTyped<
  ChevronRightProps,
  {},
  { default: {} }
> {}
