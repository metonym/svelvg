/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RSquareFill extends SvelteComponentTyped<
  RSquareFillProps,
  {},
  { default: {} }
> {}
