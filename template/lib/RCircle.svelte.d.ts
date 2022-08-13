/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RCircle extends SvelteComponentTyped<
  RCircleProps,
  {},
  { default: {} }
> {}
