/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VectorPenProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class VectorPen extends SvelteComponentTyped<
  VectorPenProps,
  {},
  { default: {} }
> {}
