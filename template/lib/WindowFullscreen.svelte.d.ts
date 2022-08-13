/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowFullscreenProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowFullscreen extends SvelteComponentTyped<
  WindowFullscreenProps,
  {},
  { default: {} }
> {}
