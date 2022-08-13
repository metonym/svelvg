/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShopWindowProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ShopWindow extends SvelteComponentTyped<
  ShopWindowProps,
  {},
  { default: {} }
> {}
