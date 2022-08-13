/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderMiddleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderMiddle extends SvelteComponentTyped<
  BorderMiddleProps,
  {},
  { default: {} }
> {}
