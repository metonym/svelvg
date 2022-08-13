/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MenuButtonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MenuButtonFill extends SvelteComponentTyped<
  MenuButtonFillProps,
  {},
  { default: {} }
> {}
