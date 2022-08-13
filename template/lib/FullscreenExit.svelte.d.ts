/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FullscreenExitProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FullscreenExit extends SvelteComponentTyped<
  FullscreenExitProps,
  {},
  { default: {} }
> {}
