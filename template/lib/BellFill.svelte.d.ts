/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BellFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BellFill extends SvelteComponentTyped<
  BellFillProps,
  {},
  { default: {} }
> {}
