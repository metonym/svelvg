/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NodePlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class NodePlus extends SvelteComponentTyped<
  NodePlusProps,
  {},
  { default: {} }
> {}
