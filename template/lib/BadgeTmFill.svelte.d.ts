/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeTmFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeTmFill extends SvelteComponentTyped<
  BadgeTmFillProps,
  {},
  { default: {} }
> {}
