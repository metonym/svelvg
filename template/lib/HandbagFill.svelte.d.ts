/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HandbagFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HandbagFill extends SvelteComponentTyped<
  HandbagFillProps,
  {},
  { default: {} }
> {}
