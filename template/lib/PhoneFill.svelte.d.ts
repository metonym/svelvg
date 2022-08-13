/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PhoneFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PhoneFill extends SvelteComponentTyped<
  PhoneFillProps,
  {},
  { default: {} }
> {}
