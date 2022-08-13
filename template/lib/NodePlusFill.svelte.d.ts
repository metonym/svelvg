/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NodePlusFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class NodePlusFill extends SvelteComponentTyped<
  NodePlusFillProps,
  {},
  { default: {} }
> {}
