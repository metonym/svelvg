/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WifiProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Wifi extends SvelteComponentTyped<
  WifiProps,
  {},
  { default: {} }
> {}
