/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PlusSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PlusSquareFill extends SvelteComponentTyped<
  PlusSquareFillProps,
  {},
  { default: {} }
> {}
