/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MotherboardFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MotherboardFill extends SvelteComponentTyped<
  MotherboardFillProps,
  {},
  { default: {} }
> {}
