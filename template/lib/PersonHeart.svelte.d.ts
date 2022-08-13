/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonHeart extends SvelteComponentTyped<
  PersonHeartProps,
  {},
  { default: {} }
> {}
