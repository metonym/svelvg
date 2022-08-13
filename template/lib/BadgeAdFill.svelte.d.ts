/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeAdFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeAdFill extends SvelteComponentTyped<
  BadgeAdFillProps,
  {},
  { default: {} }
> {}
