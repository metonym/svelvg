/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CarFrontFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CarFrontFill extends SvelteComponentTyped<
  CarFrontFillProps,
  {},
  { default: {} }
> {}
