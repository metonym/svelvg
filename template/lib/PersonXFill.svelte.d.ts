/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonXFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonXFill extends SvelteComponentTyped<
  PersonXFillProps,
  {},
  { default: {} }
> {}
