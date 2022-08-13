/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeHdFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeHdFill extends SvelteComponentTyped<
  BadgeHdFillProps,
  {},
  { default: {} }
> {}
