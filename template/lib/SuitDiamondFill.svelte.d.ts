/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SuitDiamondFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SuitDiamondFill extends SvelteComponentTyped<
  SuitDiamondFillProps,
  {},
  { default: {} }
> {}
