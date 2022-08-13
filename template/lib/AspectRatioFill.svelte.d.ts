/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AspectRatioFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class AspectRatioFill extends SvelteComponentTyped<
  AspectRatioFillProps,
  {},
  { default: {} }
> {}
