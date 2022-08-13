/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArrowsCollapseProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ArrowsCollapse extends SvelteComponentTyped<
  ArrowsCollapseProps,
  {},
  { default: {} }
> {}
