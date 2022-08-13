/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderOuterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderOuter extends SvelteComponentTyped<
  BorderOuterProps,
  {},
  { default: {} }
> {}
