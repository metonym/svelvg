/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bag extends SvelteComponentTyped<
  BagProps,
  {},
  { default: {} }
> {}
