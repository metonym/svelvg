/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Border extends SvelteComponentTyped<
  BorderProps,
  {},
  { default: {} }
> {}
