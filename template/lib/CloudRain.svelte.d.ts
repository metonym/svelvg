/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudRainProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudRain extends SvelteComponentTyped<
  CloudRainProps,
  {},
  { default: {} }
> {}
