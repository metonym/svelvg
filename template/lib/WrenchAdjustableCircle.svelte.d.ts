/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WrenchAdjustableCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WrenchAdjustableCircle extends SvelteComponentTyped<
  WrenchAdjustableCircleProps,
  {},
  { default: {} }
> {}
