/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MenuButtonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MenuButton extends SvelteComponentTyped<
  MenuButtonProps,
  {},
  { default: {} }
> {}
