/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonBadgeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonBadgeFill extends SvelteComponentTyped<
  PersonBadgeFillProps,
  {},
  { default: {} }
> {}
