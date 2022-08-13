/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CcSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CcSquareFill extends SvelteComponentTyped<
  CcSquareFillProps,
  {},
  { default: {} }
> {}
