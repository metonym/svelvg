/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NutFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class NutFill extends SvelteComponentTyped<
  NutFillProps,
  {},
  { default: {} }
> {}
