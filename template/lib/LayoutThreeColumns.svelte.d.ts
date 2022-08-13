/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LayoutThreeColumnsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LayoutThreeColumns extends SvelteComponentTyped<
  LayoutThreeColumnsProps,
  {},
  { default: {} }
> {}
