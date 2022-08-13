/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TreeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class TreeFill extends SvelteComponentTyped<
  TreeFillProps,
  {},
  { default: {} }
> {}
