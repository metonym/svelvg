/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListColumnsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ListColumns extends SvelteComponentTyped<
  ListColumnsProps,
  {},
  { default: {} }
> {}
