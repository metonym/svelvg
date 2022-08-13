/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TerminalFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TerminalFill extends SvelteComponentTyped<
  TerminalFillProps,
  {},
  { default: {} }
> {}
