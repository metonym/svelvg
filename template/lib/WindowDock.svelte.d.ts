/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowDockProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowDock extends SvelteComponentTyped<
  WindowDockProps,
  {},
  { default: {} }
> {}
