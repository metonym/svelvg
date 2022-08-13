/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeVrFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeVrFill extends SvelteComponentTyped<
  BadgeVrFillProps,
  {},
  { default: {} }
> {}
