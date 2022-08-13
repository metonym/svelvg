/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BicycleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bicycle extends SvelteComponentTyped<
  BicycleProps,
  {},
  { default: {} }
> {}
