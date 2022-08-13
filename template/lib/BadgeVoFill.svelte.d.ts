/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeVoFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeVoFill extends SvelteComponentTyped<
  BadgeVoFillProps,
  {},
  { default: {} }
> {}
