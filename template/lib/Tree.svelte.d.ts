/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TreeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tree extends SvelteComponentTyped<
  TreeProps,
  {},
  { default: {} }
> {}
