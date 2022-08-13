/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SuitDiamondProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SuitDiamond extends SvelteComponentTyped<
  SuitDiamondProps,
  {},
  { default: {} }
> {}
