/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MenuDownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MenuDown extends SvelteComponentTyped<
  MenuDownProps,
  {},
  { default: {} }
> {}
