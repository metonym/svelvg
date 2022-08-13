/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GraphDownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GraphDown extends SvelteComponentTyped<
  GraphDownProps,
  {},
  { default: {} }
> {}
