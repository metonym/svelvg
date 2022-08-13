/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EyeglassesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Eyeglasses extends SvelteComponentTyped<
  EyeglassesProps,
  {},
  { default: {} }
> {}
