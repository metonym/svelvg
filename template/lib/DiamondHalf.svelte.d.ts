/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DiamondHalfProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DiamondHalf extends SvelteComponentTyped<
  DiamondHalfProps,
  {},
  { default: {} }
> {}
