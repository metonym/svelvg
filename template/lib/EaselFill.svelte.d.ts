/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EaselFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EaselFill extends SvelteComponentTyped<
  EaselFillProps,
  {},
  { default: {} }
> {}
