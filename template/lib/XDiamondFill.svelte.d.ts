/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XDiamondFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XDiamondFill extends SvelteComponentTyped<
  XDiamondFillProps,
  {},
  { default: {} }
> {}
