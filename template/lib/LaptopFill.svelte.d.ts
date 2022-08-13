/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LaptopFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LaptopFill extends SvelteComponentTyped<
  LaptopFillProps,
  {},
  { default: {} }
> {}
