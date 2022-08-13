/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonX extends SvelteComponentTyped<
  PersonXProps,
  {},
  { default: {} }
> {}
