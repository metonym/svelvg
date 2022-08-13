/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CartX extends SvelteComponentTyped<
  CartXProps,
  {},
  { default: {} }
> {}
