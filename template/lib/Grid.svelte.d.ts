/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GridProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Grid extends SvelteComponentTyped<
  GridProps,
  {},
  { default: {} }
> {}
