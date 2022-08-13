/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonFill extends SvelteComponentTyped<
  PersonFillProps,
  {},
  { default: {} }
> {}
