/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartDashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CartDash extends SvelteComponentTyped<
  CartDashProps,
  {},
  { default: {} }
> {}
