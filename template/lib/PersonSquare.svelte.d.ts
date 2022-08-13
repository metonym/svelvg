/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonSquare extends SvelteComponentTyped<
  PersonSquareProps,
  {},
  { default: {} }
> {}
