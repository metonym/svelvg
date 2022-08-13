/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PatchMinusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PatchMinus extends SvelteComponentTyped<
  PatchMinusProps,
  {},
  { default: {} }
> {}
