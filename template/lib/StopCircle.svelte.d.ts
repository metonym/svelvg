/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StopCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StopCircle extends SvelteComponentTyped<
  StopCircleProps,
  {},
  { default: {} }
> {}
