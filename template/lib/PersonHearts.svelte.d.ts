/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonHeartsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonHearts extends SvelteComponentTyped<
  PersonHeartsProps,
  {},
  { default: {} }
> {}
