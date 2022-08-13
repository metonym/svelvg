/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class XSquareFill extends SvelteComponentTyped<
  XSquareFillProps,
  {},
  { default: {} }
> {}
