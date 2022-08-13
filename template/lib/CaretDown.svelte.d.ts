/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CaretDownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CaretDown extends SvelteComponentTyped<
  CaretDownProps,
  {},
  { default: {} }
> {}
