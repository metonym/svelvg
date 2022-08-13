/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeHdProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeHd extends SvelteComponentTyped<
  BadgeHdProps,
  {},
  { default: {} }
> {}
