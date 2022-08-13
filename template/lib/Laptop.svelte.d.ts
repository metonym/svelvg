/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LaptopProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Laptop extends SvelteComponentTyped<
  LaptopProps,
  {},
  { default: {} }
> {}
