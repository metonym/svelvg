/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DiamondProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Diamond extends SvelteComponentTyped<
  DiamondProps,
  {},
  { default: {} }
> {}
