/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HCircle extends SvelteComponentTyped<
  HCircleProps,
  {},
  { default: {} }
> {}
