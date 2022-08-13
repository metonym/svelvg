/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderTopProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderTop extends SvelteComponentTyped<
  BorderTopProps,
  {},
  { default: {} }
> {}
