/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TerminalDashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TerminalDash extends SvelteComponentTyped<
  TerminalDashProps,
  {},
  { default: {} }
> {}
