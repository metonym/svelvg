/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayoutTextSidebarProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayoutTextSidebar extends SvelteComponentTyped<
  LayoutTextSidebarProps,
  {},
  { default: {} }
> {}
