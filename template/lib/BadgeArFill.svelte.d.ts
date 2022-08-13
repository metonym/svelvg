/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeArFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeArFill extends SvelteComponentTyped<
  BadgeArFillProps,
  {},
  { default: {} }
> {}
