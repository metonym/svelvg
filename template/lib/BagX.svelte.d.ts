/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagX extends SvelteComponentTyped<
  BagXProps,
  {},
  { default: {} }
> {}
