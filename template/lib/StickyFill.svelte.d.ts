/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StickyFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StickyFill extends SvelteComponentTyped<
  StickyFillProps,
  {},
  { default: {} }
> {}
