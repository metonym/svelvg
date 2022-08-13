/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PeopleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class People extends SvelteComponentTyped<
  PeopleProps,
  {},
  { default: {} }
> {}
