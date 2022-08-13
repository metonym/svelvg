/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BlockquoteLeftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BlockquoteLeft extends SvelteComponentTyped<
  BlockquoteLeftProps,
  {},
  { default: {} }
> {}
