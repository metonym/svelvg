/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeArProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeAr extends SvelteComponentTyped<
  BadgeArProps,
  {},
  { default: {} }
> {}
