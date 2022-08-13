/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CarFrontProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CarFront extends SvelteComponentTyped<
  CarFrontProps,
  {},
  { default: {} }
> {}
