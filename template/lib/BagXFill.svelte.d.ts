/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagXFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagXFill extends SvelteComponentTyped<
  BagXFillProps,
  {},
  { default: {} }
> {}
