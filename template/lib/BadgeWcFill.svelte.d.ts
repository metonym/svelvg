/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeWcFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeWcFill extends SvelteComponentTyped<
  BadgeWcFillProps,
  {},
  { default: {} }
> {}
