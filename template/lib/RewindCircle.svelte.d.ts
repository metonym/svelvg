/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RewindCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RewindCircle extends SvelteComponentTyped<
  RewindCircleProps,
  {},
  { default: {} }
> {}
