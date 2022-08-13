/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AspectRatioProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class AspectRatio extends SvelteComponentTyped<
  AspectRatioProps,
  {},
  { default: {} }
> {}
