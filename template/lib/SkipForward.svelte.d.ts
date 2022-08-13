/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SkipForwardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SkipForward extends SvelteComponentTyped<
  SkipForwardProps,
  {},
  { default: {} }
> {}
