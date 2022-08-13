/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RouterFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class RouterFill extends SvelteComponentTyped<
  RouterFillProps,
  {},
  { default: {} }
> {}
