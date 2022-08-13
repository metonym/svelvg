/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayoutSidebarProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayoutSidebar extends SvelteComponentTyped<
  LayoutSidebarProps,
  {},
  { default: {} }
> {}
