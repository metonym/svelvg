/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RainbowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Rainbow extends SvelteComponentTyped<
  RainbowProps,
  {},
  { default: {} }
> {}
