/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoxSeamFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BoxSeamFill extends SvelteComponentTyped<
  BoxSeamFillProps,
  {},
  { default: {} }
> {}
