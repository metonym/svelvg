/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonBadgeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonBadge extends SvelteComponentTyped<
  PersonBadgeProps,
  {},
  { default: {} }
> {}
