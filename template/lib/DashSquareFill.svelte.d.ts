/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DashSquareFill extends SvelteComponentTyped<
  DashSquareFillProps,
  {},
  { default: {} }
> {}
