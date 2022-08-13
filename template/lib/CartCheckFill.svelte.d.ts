/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartCheckFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CartCheckFill extends SvelteComponentTyped<
  CartCheckFillProps,
  {},
  { default: {} }
> {}
