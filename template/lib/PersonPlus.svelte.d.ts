/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonPlusProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonPlus extends SvelteComponentTyped<
  PersonPlusProps,
  {},
  { default: {} }
> {}
