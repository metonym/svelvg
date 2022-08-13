/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudRainFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudRainFill extends SvelteComponentTyped<
  CloudRainFillProps,
  {},
  { default: {} }
> {}
