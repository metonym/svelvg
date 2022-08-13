/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NutProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Nut extends SvelteComponentTyped<
  NutProps,
  {},
  { default: {} }
> {}
