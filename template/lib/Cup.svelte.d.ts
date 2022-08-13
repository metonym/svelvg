/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CupProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cup extends SvelteComponentTyped<
  CupProps,
  {},
  { default: {} }
> {}
