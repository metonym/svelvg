/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CSquareFill extends SvelteComponentTyped<
  CSquareFillProps,
  {},
  { default: {} }
> {}
