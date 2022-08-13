/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderStyleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderStyle extends SvelteComponentTyped<
  BorderStyleProps,
  {},
  { default: {} }
> {}
