/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HddFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HddFill extends SvelteComponentTyped<
  HddFillProps,
  {},
  { default: {} }
> {}
