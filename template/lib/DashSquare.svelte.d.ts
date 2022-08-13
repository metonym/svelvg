/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DashSquare extends SvelteComponentTyped<
  DashSquareProps,
  {},
  { default: {} }
> {}
