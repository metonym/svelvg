/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SunProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Sun extends SvelteComponentTyped<
  SunProps,
  {},
  { default: {} }
> {}
