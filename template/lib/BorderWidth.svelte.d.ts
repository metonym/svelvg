/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderWidthProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderWidth extends SvelteComponentTyped<
  BorderWidthProps,
  {},
  { default: {} }
> {}
