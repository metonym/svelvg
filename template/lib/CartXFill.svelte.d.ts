/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartXFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CartXFill extends SvelteComponentTyped<
  CartXFillProps,
  {},
  { default: {} }
> {}
