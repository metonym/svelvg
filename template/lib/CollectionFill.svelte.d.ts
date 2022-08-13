/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CollectionFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CollectionFill extends SvelteComponentTyped<
  CollectionFillProps,
  {},
  { default: {} }
> {}
