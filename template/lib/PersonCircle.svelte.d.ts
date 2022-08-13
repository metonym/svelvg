/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonCircle extends SvelteComponentTyped<
  PersonCircleProps,
  {},
  { default: {} }
> {}
