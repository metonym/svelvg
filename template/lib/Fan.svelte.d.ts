/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FanProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Fan extends SvelteComponentTyped<
  FanProps,
  {},
  { default: {} }
> {}
