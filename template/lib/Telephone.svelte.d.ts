/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelephoneProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Telephone extends SvelteComponentTyped<
  TelephoneProps,
  {},
  { default: {} }
> {}
