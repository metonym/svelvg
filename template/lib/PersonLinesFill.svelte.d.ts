/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonLinesFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonLinesFill extends SvelteComponentTyped<
  PersonLinesFillProps,
  {},
  { default: {} }
> {}
