/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagPlus extends SvelteComponentTyped<
  BagPlusProps,
  {},
  { default: {} }
> {}
