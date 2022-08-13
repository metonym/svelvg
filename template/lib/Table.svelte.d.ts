/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TableProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Table extends SvelteComponentTyped<
  TableProps,
  {},
  { default: {} }
> {}
