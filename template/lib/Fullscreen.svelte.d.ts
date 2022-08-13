/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FullscreenProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Fullscreen extends SvelteComponentTyped<
  FullscreenProps,
  {},
  { default: {} }
> {}
