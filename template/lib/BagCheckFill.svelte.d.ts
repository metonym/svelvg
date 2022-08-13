/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagCheckFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BagCheckFill extends SvelteComponentTyped<
  BagCheckFillProps,
  {},
  { default: {} }
> {}
