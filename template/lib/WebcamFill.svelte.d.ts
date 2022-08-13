/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WebcamFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WebcamFill extends SvelteComponentTyped<
  WebcamFillProps,
  {},
  { default: {} }
> {}
