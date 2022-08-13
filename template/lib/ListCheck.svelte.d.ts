/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ListCheck extends SvelteComponentTyped<
  ListCheckProps,
  {},
  { default: {} }
> {}
