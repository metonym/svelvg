/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DiamondFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DiamondFill extends SvelteComponentTyped<
  DiamondFillProps,
  {},
  { default: {} }
> {}
