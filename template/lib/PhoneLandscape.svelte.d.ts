/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PhoneLandscapeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PhoneLandscape extends SvelteComponentTyped<
  PhoneLandscapeProps,
  {},
  { default: {} }
> {}
