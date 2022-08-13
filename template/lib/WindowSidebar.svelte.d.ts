/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowSidebarProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowSidebar extends SvelteComponentTyped<
  WindowSidebarProps,
  {},
  { default: {} }
> {}
