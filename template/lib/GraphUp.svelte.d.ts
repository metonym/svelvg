/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GraphUpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GraphUp extends SvelteComponentTyped<
  GraphUpProps,
  {},
  { default: {} }
> {}
