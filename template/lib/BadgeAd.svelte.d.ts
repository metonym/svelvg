/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeAdProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeAd extends SvelteComponentTyped<
  BadgeAdProps,
  {},
  { default: {} }
> {}
