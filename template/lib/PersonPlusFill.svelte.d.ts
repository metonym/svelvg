/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonPlusFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonPlusFill extends SvelteComponentTyped<
  PersonPlusFillProps,
  {},
  { default: {} }
> {}
