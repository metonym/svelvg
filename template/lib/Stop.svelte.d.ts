/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StopProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Stop extends SvelteComponentTyped<
  StopProps,
  {},
  { default: {} }
> {}
