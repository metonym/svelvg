/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeCcFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeCcFill extends SvelteComponentTyped<
  BadgeCcFillProps,
  {},
  { default: {} }
> {}
