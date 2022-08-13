/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListOlProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ListOl extends SvelteComponentTyped<
  ListOlProps,
  {},
  { default: {} }
> {}
