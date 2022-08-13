/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CollectionPlayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CollectionPlay extends SvelteComponentTyped<
  CollectionPlayProps,
  {},
  { default: {} }
> {}
