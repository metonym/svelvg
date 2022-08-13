/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StarFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StarFill extends SvelteComponentTyped<
  StarFillProps,
  {},
  { default: {} }
> {}
