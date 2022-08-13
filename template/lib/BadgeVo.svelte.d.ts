/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeVoProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeVo extends SvelteComponentTyped<
  BadgeVoProps,
  {},
  { default: {} }
> {}
