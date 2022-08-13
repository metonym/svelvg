/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowSplitProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowSplit extends SvelteComponentTyped<
  WindowSplitProps,
  {},
  { default: {} }
> {}
