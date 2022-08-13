/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CCircle extends SvelteComponentTyped<
  CCircleProps,
  {},
  { default: {} }
> {}
