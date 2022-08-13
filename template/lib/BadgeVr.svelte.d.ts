/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BadgeVrProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BadgeVr extends SvelteComponentTyped<
  BadgeVrProps,
  {},
  { default: {} }
> {}
