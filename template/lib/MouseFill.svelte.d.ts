/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MouseFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MouseFill extends SvelteComponentTyped<
  MouseFillProps,
  {},
  { default: {} }
> {}
