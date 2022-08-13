/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderAllProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderAll extends SvelteComponentTyped<
  BorderAllProps,
  {},
  { default: {} }
> {}
