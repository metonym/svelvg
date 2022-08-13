/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonCheckFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonCheckFill extends SvelteComponentTyped<
  PersonCheckFillProps,
  {},
  { default: {} }
> {}
