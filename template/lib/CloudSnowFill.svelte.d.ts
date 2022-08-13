/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudSnowFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudSnowFill extends SvelteComponentTyped<
  CloudSnowFillProps,
  {},
  { default: {} }
> {}
