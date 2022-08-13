/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VinylFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class VinylFill extends SvelteComponentTyped<
  VinylFillProps,
  {},
  { default: {} }
> {}
