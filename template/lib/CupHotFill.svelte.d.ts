/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CupHotFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CupHotFill extends SvelteComponentTyped<
  CupHotFillProps,
  {},
  { default: {} }
> {}
