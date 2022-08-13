/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GenderFemaleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GenderFemale extends SvelteComponentTyped<
  GenderFemaleProps,
  {},
  { default: {} }
> {}
