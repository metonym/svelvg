/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudSnowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudSnow extends SvelteComponentTyped<
  CloudSnowProps,
  {},
  { default: {} }
> {}
