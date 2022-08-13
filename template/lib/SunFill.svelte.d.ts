/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SunFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SunFill extends SvelteComponentTyped<
  SunFillProps,
  {},
  { default: {} }
> {}
