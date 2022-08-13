/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HSquareFill extends SvelteComponentTyped<
  HSquareFillProps,
  {},
  { default: {} }
> {}
