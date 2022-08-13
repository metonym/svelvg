/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BasketFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BasketFill extends SvelteComponentTyped<
  BasketFillProps,
  {},
  { default: {} }
> {}
