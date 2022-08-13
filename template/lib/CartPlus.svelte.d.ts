/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CartPlus extends SvelteComponentTyped<
  CartPlusProps,
  {},
  { default: {} }
> {}
