/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PhoneProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Phone extends SvelteComponentTyped<
  PhoneProps,
  {},
  { default: {} }
> {}
