/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayoutSidebarInsetProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayoutSidebarInset extends SvelteComponentTyped<
  LayoutSidebarInsetProps,
  {},
  { default: {} }
> {}
