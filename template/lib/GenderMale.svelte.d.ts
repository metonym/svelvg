/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GenderMaleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GenderMale extends SvelteComponentTyped<
  GenderMaleProps,
  {},
  { default: {} }
> {}
