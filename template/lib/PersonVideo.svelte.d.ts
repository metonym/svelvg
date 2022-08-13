/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PersonVideoProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PersonVideo extends SvelteComponentTyped<
  PersonVideoProps,
  {},
  { default: {} }
> {}
