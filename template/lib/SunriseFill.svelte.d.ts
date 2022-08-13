/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SunriseFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SunriseFill extends SvelteComponentTyped<
  SunriseFillProps,
  {},
  { default: {} }
> {}
