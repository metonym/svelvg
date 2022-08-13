/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartDashFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CartDashFill extends SvelteComponentTyped<
  CartDashFillProps,
  {},
  { default: {} }
> {}
