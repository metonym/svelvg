/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderBottomProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderBottom extends SvelteComponentTyped<
  BorderBottomProps,
  {},
  { default: {} }
> {}
