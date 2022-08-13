/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TerminalSplitProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TerminalSplit extends SvelteComponentTyped<
  TerminalSplitProps,
  {},
  { default: {} }
> {}
