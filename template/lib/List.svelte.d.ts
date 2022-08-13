/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class List extends SvelteComponentTyped<
  ListProps,
  {},
  { default: {} }
> {}
