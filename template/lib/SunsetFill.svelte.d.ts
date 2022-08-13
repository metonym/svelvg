/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SunsetFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SunsetFill extends SvelteComponentTyped<
  SunsetFillProps,
  {},
  { default: {} }
> {}
