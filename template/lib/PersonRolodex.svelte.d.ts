/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonRolodexProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonRolodex extends SvelteComponentTyped<
  PersonRolodexProps,
  {},
  { default: {} }
> {}
