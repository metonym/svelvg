/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HourglassTopProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HourglassTop extends SvelteComponentTyped<
  HourglassTopProps,
  {},
  { default: {} }
> {}
