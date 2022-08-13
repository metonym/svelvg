/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BrightnessHighProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BrightnessHigh extends SvelteComponentTyped<
  BrightnessHighProps,
  {},
  { default: {} }
> {}
