/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SunglassesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Sunglasses extends SvelteComponentTyped<
  SunglassesProps,
  {},
  { default: {} }
> {}
