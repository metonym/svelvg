/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CupHotProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CupHot extends SvelteComponentTyped<
  CupHotProps,
  {},
  { default: {} }
> {}
