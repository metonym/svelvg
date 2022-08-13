/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HourglassProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hourglass extends SvelteComponentTyped<
  HourglassProps,
  {},
  { default: {} }
> {}
