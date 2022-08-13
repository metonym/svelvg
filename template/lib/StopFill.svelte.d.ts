/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StopFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StopFill extends SvelteComponentTyped<
  StopFillProps,
  {},
  { default: {} }
> {}
