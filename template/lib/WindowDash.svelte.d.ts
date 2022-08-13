/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowDashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowDash extends SvelteComponentTyped<
  WindowDashProps,
  {},
  { default: {} }
> {}
