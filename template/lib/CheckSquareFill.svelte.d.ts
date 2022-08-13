/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CheckSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CheckSquareFill extends SvelteComponentTyped<
  CheckSquareFillProps,
  {},
  { default: {} }
> {}
