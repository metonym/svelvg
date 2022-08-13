/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoundingBoxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BoundingBox extends SvelteComponentTyped<
  BoundingBoxProps,
  {},
  { default: {} }
> {}
