/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CapslockFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CapslockFill extends SvelteComponentTyped<
  CapslockFillProps,
  {},
  { default: {} }
> {}
