/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PhoneFlipProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PhoneFlip extends SvelteComponentTyped<
  PhoneFlipProps,
  {},
  { default: {} }
> {}
