/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListTaskProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ListTask extends SvelteComponentTyped<
  ListTaskProps,
  {},
  { default: {} }
> {}
