/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MenuAppFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MenuAppFill extends SvelteComponentTyped<
  MenuAppFillProps,
  {},
  { default: {} }
> {}
