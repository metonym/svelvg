/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PatchPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PatchPlus extends SvelteComponentTyped<
  PatchPlusProps,
  {},
  { default: {} }
> {}
