/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PSquareFill extends SvelteComponentTyped<
  PSquareFillProps,
  {},
  { default: {} }
> {}
