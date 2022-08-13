/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MotherboardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Motherboard extends SvelteComponentTyped<
  MotherboardProps,
  {},
  { default: {} }
> {}
