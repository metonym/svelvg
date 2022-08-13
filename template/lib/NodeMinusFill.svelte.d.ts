/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NodeMinusFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class NodeMinusFill extends SvelteComponentTyped<
  NodeMinusFillProps,
  {},
  { default: {} }
> {}
