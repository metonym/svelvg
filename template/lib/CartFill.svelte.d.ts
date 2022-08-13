/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CartFill extends SvelteComponentTyped<
  CartFillProps,
  {},
  { default: {} }
> {}
