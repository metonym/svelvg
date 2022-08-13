/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListNestedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ListNested extends SvelteComponentTyped<
  ListNestedProps,
  {},
  { default: {} }
> {}
