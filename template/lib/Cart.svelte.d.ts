/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Cart extends SvelteComponentTyped<
  CartProps,
  {},
  { default: {} }
> {}
