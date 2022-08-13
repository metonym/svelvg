/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DiscFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DiscFill extends SvelteComponentTyped<
  DiscFillProps,
  {},
  { default: {} }
> {}
