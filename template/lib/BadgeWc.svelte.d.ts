/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeWcProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeWc extends SvelteComponentTyped<
  BadgeWcProps,
  {},
  { default: {} }
> {}
