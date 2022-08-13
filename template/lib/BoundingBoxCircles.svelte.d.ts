/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoundingBoxCirclesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BoundingBoxCircles extends SvelteComponentTyped<
  BoundingBoxCirclesProps,
  {},
  { default: {} }
> {}
