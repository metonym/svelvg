/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WifiOffProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WifiOff extends SvelteComponentTyped<
  WifiOffProps,
  {},
  { default: {} }
> {}
