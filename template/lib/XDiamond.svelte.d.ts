/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XDiamondProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XDiamond extends SvelteComponentTyped<
  XDiamondProps,
  {},
  { default: {} }
> {}
