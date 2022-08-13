/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HourglassBottomProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HourglassBottom extends SvelteComponentTyped<
  HourglassBottomProps,
  {},
  { default: {} }
> {}
