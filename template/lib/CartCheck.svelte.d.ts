/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartCheckProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CartCheck extends SvelteComponentTyped<
  CartCheckProps,
  {},
  { default: {} }
> {}
