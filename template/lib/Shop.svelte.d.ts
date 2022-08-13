/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShopProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Shop extends SvelteComponentTyped<
  ShopProps,
  {},
  { default: {} }
> {}
