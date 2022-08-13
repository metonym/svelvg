/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagFill extends SvelteComponentTyped<
  BagFillProps,
  {},
  { default: {} }
> {}
