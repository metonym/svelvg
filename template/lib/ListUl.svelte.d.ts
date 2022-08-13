/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListUlProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ListUl extends SvelteComponentTyped<
  ListUlProps,
  {},
  { default: {} }
> {}
