/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TriangleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TriangleFill extends SvelteComponentTyped<
  TriangleFillProps,
  {},
  { default: {} }
> {}
