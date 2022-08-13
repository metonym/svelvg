/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayoutSplitProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayoutSplit extends SvelteComponentTyped<
  LayoutSplitProps,
  {},
  { default: {} }
> {}
