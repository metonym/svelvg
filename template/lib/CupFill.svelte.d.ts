/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CupFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CupFill extends SvelteComponentTyped<
  CupFillProps,
  {},
  { default: {} }
> {}
