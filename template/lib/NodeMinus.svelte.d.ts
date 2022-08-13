/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NodeMinusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class NodeMinus extends SvelteComponentTyped<
  NodeMinusProps,
  {},
  { default: {} }
> {}
