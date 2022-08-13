/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ColumnsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Columns extends SvelteComponentTyped<
  ColumnsProps,
  {},
  { default: {} }
> {}
