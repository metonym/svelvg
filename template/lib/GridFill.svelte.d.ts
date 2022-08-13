/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GridFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GridFill extends SvelteComponentTyped<
  GridFillProps,
  {},
  { default: {} }
> {}
