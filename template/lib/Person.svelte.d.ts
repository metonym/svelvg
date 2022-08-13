/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Person extends SvelteComponentTyped<
  PersonProps,
  {},
  { default: {} }
> {}
