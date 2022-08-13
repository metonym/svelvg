/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SignpostSplitProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SignpostSplit extends SvelteComponentTyped<
  SignpostSplitProps,
  {},
  { default: {} }
> {}
