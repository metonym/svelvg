/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowDesktopProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowDesktop extends SvelteComponentTyped<
  WindowDesktopProps,
  {},
  { default: {} }
> {}
