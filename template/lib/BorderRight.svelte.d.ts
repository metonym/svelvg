/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderRightProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderRight extends SvelteComponentTyped<
  BorderRightProps,
  {},
  { default: {} }
> {}
