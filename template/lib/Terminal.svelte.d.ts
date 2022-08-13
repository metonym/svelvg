/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TerminalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Terminal extends SvelteComponentTyped<
  TerminalProps,
  {},
  { default: {} }
> {}
