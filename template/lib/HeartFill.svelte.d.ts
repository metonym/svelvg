/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HeartFill extends SvelteComponentTyped<
  HeartFillProps,
  {},
  { default: {} }
> {}
