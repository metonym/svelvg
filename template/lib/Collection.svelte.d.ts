/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CollectionProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Collection extends SvelteComponentTyped<
  CollectionProps,
  {},
  { default: {} }
> {}
