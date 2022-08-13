/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SquareFill extends SvelteComponentTyped<
  SquareFillProps,
  {},
  { default: {} }
> {}
