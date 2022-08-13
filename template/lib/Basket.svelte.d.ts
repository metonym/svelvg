/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BasketProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Basket extends SvelteComponentTyped<
  BasketProps,
  {},
  { default: {} }
> {}
